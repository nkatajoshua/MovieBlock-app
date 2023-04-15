import React, { useEffect, useState } from 'react';
import './TrendingTvShow.css';

function TrendingTVShows() {
  const [trendingShows, setTrendingShows] = useState([]);

  useEffect(() => {
    const fetchTrendingShows = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/tv/week?api_key=311c30cde07e03c2566a3d8d8409c3b8'
      );
      const data = await response.json();
      setTrendingShows(data.results);
    };

    fetchTrendingShows();
  }, []);

  return (
    <div className="container">
      <h1>Trending This Week</h1>
      <div className="card-container">
        {trendingShows.slice(0, 6).map((show) => (
          <div className="card" key={show.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
            />
            <div className="card-details">
              <h2>{show.name}</h2>
              <p>{show.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingTVShows;
