import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import TrendingMoviesList from "./components/TrendingMoviesList";
function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <TrendingMoviesList />
    </div>
  );
}

export default App;
