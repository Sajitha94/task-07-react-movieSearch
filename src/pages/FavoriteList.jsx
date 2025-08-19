import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useMovieData } from '../components/MovieFetchData';
import MovieCard from '../components/MovieCard';
function FavoriteList() {
    const navigate = useNavigate();
      const { favoriteList } = useMovieData();
     console.log(favoriteList,"setFavoriteList123");
     
     
  return (
    <>
    { favoriteList.length >0 ? <MovieCard favoriteListItem={favoriteList} /> :<h1 className='text-amber-100'>No Favorite Items</h1>

    }
   
    </>
  )
}

export default FavoriteList