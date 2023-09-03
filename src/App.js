import { useEffect, useState } from "react";
import "./App.css";
import "./css/test.css";
import axios from "axios";

// https://api.themoviedb.org/3/search/movie?api_key=14a117ba5adb4431bd4fec8362448964&language=en-US&query=The%20Amazing%20Spider-Man

//api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=14a117ba5adb4431bd4fec8362448964&
// https:
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  function getTrendingMovies() {
    setLoading(true);
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=14a117ba5adb4431bd4fec8362448964&"
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

  if (loading) {
    return <h1>Loading ......</h1>;
  }

  return (
    <div>
      <h1>Movie </h1>
      {movies.map((movie) => (
        <div>
          <img
            style={{
              objectFit: "contain",
              width: "400px",
            }}
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          />
          <h4>{movie.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;

// https://fpm15.csb.app/
