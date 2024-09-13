import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };
  const linkStyle = {
    fontSize: '21px',
    paddingRight: '956px',
    textDecoration: 'none', 
    color: '#fff'
  };
  return (
    <nav>
       <Link to="/" style={linkStyle}>MoviesDB</Link>
      <Link to="/">Popular</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Movie Name" 
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
