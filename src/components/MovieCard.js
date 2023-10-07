import React from "react";

function MovieCard({ imageUrl }) {
  return (
    <div className="card movie-card">
      <img src={imageUrl} class="card-img-top" alt="..." />
    </div>
  );
}

export default MovieCard;
