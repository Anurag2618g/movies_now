import React from 'react'

const Card = ({movie, onClick}) => {
  const poster = movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "No-Poster.png";
  return (
    <div className='movie-card cursor-pointer transition-transform duration-300 hover:scale-102' onClick={onClick(movie)}>
      <img src={poster} alt={movie.original_title} />
      <div className='mt-4'>
        <h3>{movie.title}</h3>
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