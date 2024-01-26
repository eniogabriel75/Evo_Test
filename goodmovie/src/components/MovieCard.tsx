// src/components/MovieCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MovieCard: React.FC<{ movie: any }> = ({ movie }) => {
  return (
    <div>
      <Link href={`/movie/${movie.id}`}>
        {" "}
        {}
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
          />
          <h3>{movie.title}</h3>
          <p>Pontuação: {movie.vote_average}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
