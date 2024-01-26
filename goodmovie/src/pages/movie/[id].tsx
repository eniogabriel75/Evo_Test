import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { TMDB_API_KEY } from "../../utils/tmdbConfig";

const MovieDetail: React.FC<{ movie: any }> = ({ movie }) => {
  const router = useRouter();

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Sinopse: {movie.overview}</p>
      <p>Data de Lançamento: {movie.release_date}</p>
      <p>Gêneros: {movie.genres.map((genre: any) => genre.name).join(", ")}</p>
      <p>Tempo Total: {movie.runtime} minutos</p>
      <p>
        Elenco: {movie.credits.cast.map((cast: any) => cast.name).join(", ")}
      </p>
      <button onClick={() => router.push("/")}>Voltar</button>
    </div>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${TMDB_API_KEY}&language=pt-BR&append_to_response=credits`
    );
    const movie = response.data;

    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error("Error fetching movie details:");
    return {
      notFound: true,
    };
  }
};

export default MovieDetail;
