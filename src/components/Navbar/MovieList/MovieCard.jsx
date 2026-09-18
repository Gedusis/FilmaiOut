import React from 'react'

import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      rel="noreferrer"
      className="movie_card"
    >
      <div className="movie_poster_wrap">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          className="movie_poster"
        />
        <span className="movie_rating_badge">{movie.vote_average.toFixed(1)}</span>
      </div>

      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <p className="movie_release_date">{movie.release_date}</p>
      </div>
    </a>
  );
};

export default MovieCard;
