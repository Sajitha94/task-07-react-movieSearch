import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { MYKEY, REST_HOST_API } from "../moviedb";

const MovieDataApi = createContext();

export function MovieFetchData({ children }) {
  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Tamil");
  const [type, setType] = useState("all");
  const [page, setPage] = useState(1);
const [totalResults, setTotalResults] = useState(0);
const [error,setError]=useState("")

  const [favoriteList, setFavoriteList] = useState([]);
  // https://www.omdbapi.com/?apikey=1f1cbf65&s=dada&page=1&type=movie
  useEffect(() => {
    if (!searchTerm) return;
    const typeParam = type !== "all" ? `&type=${type}` : "";
    fetch(
      `${REST_HOST_API}/?apikey=${MYKEY}&s=${searchTerm}&page=${page}${typeParam}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
        setMovie(data.Search || []);
        setTotalResults(Number(data.totalResults) || 0);
        setError(""); 
      } else {
        setMovie([]);
        setTotalResults(0);
        setError(data.Error	||"Network error, please try again.");
      }
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      });
  }, [searchTerm, type,page]);

  return (
    <MovieDataApi.Provider
      value={{
        movie,
        setMovie,
        setSearchTerm,
        setFavoriteList,
        favoriteList,
        type,
        setType,page,
        setPage,totalResults,error
      }}
    >
      {children}
    </MovieDataApi.Provider>
  );
}
export function useMovieData() {
  return useContext(MovieDataApi);
}
