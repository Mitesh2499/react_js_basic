import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { API_KEY } from "../config";

function TrendingMoviesList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  function getTrendingMovies() {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}&`
      )
      .then((result) => {
        setLoading(false);
        setMovies(result.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-baseline">
        <h5 className="text-white">Trending Movies</h5>
        <h6 className="text-white">View All</h6>
      </div>

      <div className="row">
        {movies.map((movie) => (
          <div className="col-3">
            <MovieCard
              imageUrl={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingMoviesList;
