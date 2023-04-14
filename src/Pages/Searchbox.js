import React, { useState } from 'react';

function Searchbox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=311c30cde07e03c2566a3d8d8409c3b8&query=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={query} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbox;
