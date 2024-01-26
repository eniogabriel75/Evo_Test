import React from "react";
import MovieCard from "./MovieCard";

const MovieList: React.FC<{ movies: any[] }> = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
