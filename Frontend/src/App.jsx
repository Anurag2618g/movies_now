import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Card from './components/Card';

const token = import.meta.env.VITE_API_TOKEN;

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const apiURL = "https://api.themoviedb.org/3/";

  const fetchMovies = async() => {
    setLoading(true);
    try {
      const response = await axios.get((searchText.trim() !== '')? `${apiURL}search/movie?language=en-US&query=${searchText}` : `${apiURL}discover/movie?page=1&language=en-US`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}` 
        }
      })

      if (response.status == 200) {
        setMovies(response.data.results);
      } 
      else {
        setError('Something went wrong!');
      }

    } catch (error){
      console.error(error);
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
      fetchMovies();
  }, [searchText]);


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

      <section className='all-movies'>
        {error ? <p className='text-red-500'>{error}</p>:
            loading ? <p>Loading...</p> : <p className='text-medium font-bold text-2xl'>All Movies</p>
        }
        {loading? (
          <p className='text-white'>Loading...</p>
        ) : error? (
          <p className='text-red-500'>{error}</p>
        ) : 
          <ul>
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </ul>
        }
      </section>
    </main>
  )
}

export default App