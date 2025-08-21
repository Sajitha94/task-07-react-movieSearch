import React from "react";
import { useNavigate } from "react-router-dom";
import { useMovieData } from "../components/MovieFetchData";
import MovieCard from "../components/MovieCard";
import { Box } from "@mui/material";
function FavoriteList() {
  const navigate = useNavigate();
  const { favoriteList ,setFavoriteList} = useMovieData();
  console.log(favoriteList, "setFavoriteList123");

  return (
    <>
      {favoriteList.length > 0 ? (
        <Box className='flex flex-col justify-center my-10 gap-5'>
          <Box className='flex items-center justify-between  md:me-10 me-5'>
        <h1 className="text-amber-100 md:text-3xl text-2xl lg:px-24 md:px-10 px-3">Your Favourites</h1>
        <small className="text-amber-100 text-lg cursor-pointer" onClick={()=>setFavoriteList([])}>Remove All</small>
        </Box>
        <MovieCard favoriteListItem={favoriteList} />
        </Box>
      ) : (
        <Box className='flex justify-center items-center my-20'>
        <h1 className="text-amber-100 text-3xl">No Favourite Items</h1>
        </Box>
      )}
    </>
  );
}

export default FavoriteList;
