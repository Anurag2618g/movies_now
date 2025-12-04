/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Card from './components/Card';

const token = import.meta.env.VITE_API_TOKEN;
const apiURL = "https://api.themoviedb.org/3/";
const baseURL = import.meta.env.VITE_BASE_URL;

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [debouncedTerm, setDebounced] = useState('');
  const [trending, setTrending] = useState([]);

  useDebounce(() => setDebounced(searchText), 1000, [searchText]);

  const fetchMovies = async() => {
    setLoading(true);
    try {
      const query = debouncedTerm.trim();
      const response = await axios.get((query !== '')? `${apiURL}search/movie?language=en-US&query=${encodeURIComponent(query)}` : `${apiURL}discover/movie?page=1&language=en-US`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}` 
        }
      })
      if (response.status == 200) {
        setMovies(response.data.results);
        setError('');
      }
    } catch (error){
      console.error(error);
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  const updatetrending = async({id, poster_path, title}) => {
    try {
      const res = await axios.post(`${baseURL}/api/trending`, {id, title, poster_path});
      console.log(res);
      console.log(title)
      alert('Available soon');
    }
    catch(err) {
      console.error(err.response?.data || err.message);
    }
  }

  const getTrending = async() => {
    try {
      const res = await axios.get(`${baseURL}/api/movies?limit=6`);
      setTrending(res.data);
    }
    catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
      fetchMovies();
  }, [debouncedTerm]);
  
  useEffect(() => {
    getTrending();
  }, []);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="hero banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy without The Hassel</h1>
        </header>
        <Search searchText = {searchText} setSearchText = {setSearchText} />
      </div>

      {debouncedTerm == '' && trending.length > 0 && (
        <section className='trending'>
          <h2>Trending Movies</h2>
          <ul>
            {trending.map((movie, index) => (
              <li key={movie.id}>
                <p>{index+1}</p>
                <img className='hover:scale-105' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className='all-movies'>
        {loading? (
          <p className='text-white'>Loading...</p>
        ) : error? (
          <p className='text-red-500'>{error}</p>
        ) : movies.length !== 0?  
          (
          <>
            <h2>All Movies</h2>
            <ul>
              {movies.length !== 0 && movies.map((movie) => (
                <Card key={movie.id} movie={movie} onClick={() => updatetrending(movie)} />
              ))}
            </ul>
          </>
          ) : (
            <p className='text-gradient text-center py-20 m-20  font-medium text-4xl'>Found Nothing Here!</p>
          )
        }
      </section>
    </main>
  )
}

export default App