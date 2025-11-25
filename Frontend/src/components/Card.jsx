import React from 'react'

const Card = ({movie}) => {
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className='movie-card'>
      <img src={poster} alt={movie.original_title} />
      <div className='mt-4'>
        <h3>{movie.original_title}</h3>
        <div className='content'>

          <div className='rating'>
            <img src="/Rating.svg" alt="rating" />
            <p>{movie.vote_average? movie.vote_average.toFixed(1) : 'N/A'}</p>
          </div>

          <span>.</span>
          <p className='lang'>{movie.original_language}</p>

          <span>.</span>
          <p className='year'>{movie.release_date? movie.release_date.split('-')[0] : 'NA'}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;