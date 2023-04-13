import React, { useEffect, useState } from 'react';

const Tvshows = () => {
  const [trendingTvShows, setTrendingTvShows] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingTvShows = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/tv/week?api_key=311c30cde07e03c2566a3d8d8409c3b8'
        );
        const data = await response.json();
        setTrendingTvShows(data.results);
      } catch (error) {
        setError(true);
      }
    };

    fetchTrendingTvShows();
  }, []);

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      <h1>Trending TV Shows of the Week</h1>
      <ul>
        {trendingTvShows.map((tvShow) => (
          <li key={tvShow.id}>{tvShow.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Tvshows;
