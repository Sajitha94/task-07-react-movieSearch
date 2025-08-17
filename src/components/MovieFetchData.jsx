import React, {  createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
import { MYKEY, REST_HOST_API } from '../moviedb';


const MovieDataApi=createContext()

export function MovieFetchData({ children }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`${REST_HOST_API}/?apikey=${MYKEY}&s=Tamil`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.Search );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MovieDataApi.Provider value={{ movie, setMovie }}>
      {children} 
    </MovieDataApi.Provider>
  );
}
export function useMovieData(){
    return useContext(MovieDataApi)
}