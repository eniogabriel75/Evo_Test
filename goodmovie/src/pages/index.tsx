import React, { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { TMDB_API_KEY } from "../utils/tmdbConfig";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const HomePage: React.FC<{ movies: any[] }> = ({ movies }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=pt-BR&query=${query}&page=1`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error searching movies:");
    }
  };

  return (
    <div>
      <h1>Filmes Populares</h1>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      {searchResults.length > 0 ? (
        <div>
          <h2>Resultados da Pesquisa</h2>
          <MovieList movies={searchResults} />
        </div>
      ) : (
        <div>
          <MovieList movies={movies} />
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`
  );
  const movies = response.data.results;

  return {
    props: {
      movies,
    },
  };
};

export default HomePage;
