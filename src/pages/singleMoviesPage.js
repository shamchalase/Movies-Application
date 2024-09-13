// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './MovieDetailPage.css'; // Import a specific CSS file for MovieDetailPage

// const singleMoviesPage = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [cast, setCast] = useState([]);
//   const api_key = 'c45a857c193f6302f2b5061c3b85e743'; // Your API Key

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`);
//         setMovie(movieResponse.data);

//         const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`);
//         setCast(castResponse.data.cast);
//       } catch (error) {
//         console.error('Error fetching movie details or cast:', error);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (!movie) return <p>Loading...</p>;

//   return (
//     <div className="movie-detail-page">
//       <h1>{movie.title}</h1>
//       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//       <p>{movie.overview}</p>

//       <h2>Cast</h2>
//       <div className="cast-list">
//         {cast.map((actor) => (
//           <div key={actor.id} className="cast-member">
//             <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
//             <p>{actor.name}</p>
//             <p>{actor.character}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default singleMoviesPage;
