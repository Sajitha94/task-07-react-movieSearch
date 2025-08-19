import React from "react";
import { useNavigate } from "react-router-dom";
import { useMovieData } from "../components/MovieFetchData";
import MovieCard from "../components/MovieCard";
import { Box } from "@mui/material";
function FavoriteList() {
  const navigate = useNavigate();
  const { favoriteList } = useMovieData();
  console.log(favoriteList, "setFavoriteList123");

  return (
    <>
      {favoriteList.length > 0 ? (
        <Box className='flex flex-col justify-center my-10 gap-5'>
        <h1 className="text-amber-100 text-3xl lg:px-24 md:px-10 px-3">Your Favorites</h1>
        <MovieCard favoriteListItem={favoriteList} />
        </Box>
      ) : (
        <h1 className="text-amber-100">No Favorite Items</h1>
      )}
    </>
  );
}

export default FavoriteList;
