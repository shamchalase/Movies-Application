import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </Link>
      <h3>{movie.title}</h3>
      <p><strong>Rating:</strong> {movie.vote_average} </p>
    </div>
  );
};

export default MovieCard;
