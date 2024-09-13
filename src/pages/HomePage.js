import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination'; 

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state
  const api_key = 'c45a857c193f6302f2b5061c3b85e743'; // Your API Key

  // Fetch movies based on the current page
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${currentPage}`)
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages); // Set total pages based on API response
      })
      .catch((error) => console.log(error));
  }, [currentPage]); // Fetch data whenever currentPage changes

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); // Update current page when pagination is clicked
  };

  return (
    <div className='container'>
      <h1>Popular Movies</h1>
      <MovieList movies={movies} />
      {/* Add Pagination component */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default HomePage;