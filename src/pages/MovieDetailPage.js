import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const api_key = 'c45a857c193f6302f2b5061c3b85e743'; // Your API Key

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`);
        setMovie(movieResponse.data);

        const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`);
        setCast(castResponse.data.cast);
      } catch (error) {
        console.error('Error fetching movie details or cast:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const releaseDate = new Date(movie.release_date).toLocaleDateString();
  const runtime = movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : 'N/A';

  // Slice the cast array to get only the first 10 members
  const topCast = cast.slice(0, 10);

  return (
    <>
      <div className="movie-detail-page">
        <div className='row movierow'>

          <div className='col-md-2'>
          
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='moviepageimg' alt={movie.title} />
          </div>
          <div className='col-md-10'>
            <div className="movie-info">
               <h1>{movie.title}</h1>
              <p><strong>Release Date:</strong> {releaseDate}</p>
              <p><strong>Runtime:</strong> {runtime}</p>
              <p><strong>Rating:</strong> {movie.vote_average}</p>
            </div>
          </div>
        </div>
        <div className='cardoverview'>
        <p ><strong>Overview</strong></p>
        <p>{movie.overview}</p>
        </div>
      </div>

      <h2 className='castHeading'>Cast</h2>
      <div className="cast-list">
        {topCast.map((actor) => (
          <div key={actor.id} className="cast-member">
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieDetailPage;
