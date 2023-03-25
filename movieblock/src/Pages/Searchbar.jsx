import { useState, useEffect } from 'react';

function Searchbar() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=311c30cde07e03c2566a3d8d8409c3b8&query=${searchTerm}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, [searchTerm]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };
cd 
  return (
    <div>
      <input type="text" placeholder="Search for a movie" value={searchTerm} onChange={handleSearch} />
      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}
