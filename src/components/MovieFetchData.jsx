import React, {  createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
import { MYKEY, REST_HOST_API } from '../moviedb';


const MovieDataApi=createContext()

export function MovieFetchData({ children }) {
  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Tamil");

  useEffect(() => {
    if(!searchTerm) return;

    fetch(`${REST_HOST_API}/?apikey=${MYKEY}&s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.Search );
      })
      .catch((err) => console.log(err));
  }, [searchTerm]);

  return (
   <MovieDataApi.Provider value={{ movie, setMovie, setSearchTerm }}>
  {children}
</MovieDataApi.Provider>
  );
}
export function useMovieData(){
    return useContext(MovieDataApi)
}