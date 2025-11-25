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

  const fetchMovies = async() => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
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

      <section className='all-movies'>
        {error ? <p className='text-red-500'>{error}</p>:
            loading ? <p>Loading...</p> : <p className='text-medium font-bold text-2xl'>All Movies</p>
        }
        {!loading && !error && 
          <ul>
            {movies.map((movie) => (
              // console.log(movie)
              <Card key={movie.id} movie={movie} />
              // <p className='text-white'>{movie.original_title}</p>
            ))}
          </ul>
        }
      </section>
    </main>
  )
}

export default App