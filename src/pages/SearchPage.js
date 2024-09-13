import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../components/MovieList';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const api_key = 'c45a857c193f6302f2b5061c3b85e743';

  // Extract query parameter
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        setLoading(true);
        setError(null); // Reset error on new search

        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
              api_key: api_key,
              language: 'en-US',
              query: query,
              page: 1,
            },
          });
          
          // Log response for debugging
          console.log('Search Results:', response.data);

          setMovies(response.data.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
          setError('Failed to fetch results. Please try again later.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMovies();
  }, [query, api_key]);

  if (loading) {
    return <p>Loading search results...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No results found for "{query}". Try another search.</p>
      )}
    </div>
  );
};

export default SearchPage;
