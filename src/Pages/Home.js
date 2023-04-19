import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/all/week?api_key=311c30cde07e03c2566a3d8d8409c3b8'
        );
        const data = await response.json();
        setTrending(data.results.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Trending Movies This Week</h1>
      <h1> Co</h1>
      <div className="card-container">
        {trending.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.name || item.title}
            />
            <div className="card-details">
              <h2>{item.name || item.title}</h2>
              <p>{item.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
