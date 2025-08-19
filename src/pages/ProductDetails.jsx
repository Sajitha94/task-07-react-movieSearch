import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MYKEY, REST_HOST_API } from "../moviedb";
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import defaultImage from "../assets/noImage.png";
import { useMovieData } from "../components/MovieFetchData";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
function ProductDetails() {
  const [moviedetail, setMovieDetail] = useState(null);
    const { favoriteList, setFavoriteList } = useMovieData();
  const { omdId } = useParams();

  useEffect(() => {
   if(!omdId) return
   fetch(`${REST_HOST_API}/?apikey=${MYKEY}&i=${omdId}&plot=full`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieDetail(data);
      })
      .catch((err) => console.log(err));
  }, [omdId]);
console.log(moviedetail,"moviedetail");


 function toggleFavorite(movieItem) {
    setFavoriteList((prevFavorites) => {
      const exists = prevFavorites.some(
        (fav) => fav.imdbID === movieItem.imdbID
      );
      if (exists) {
        // remove from favorites

        return prevFavorites.filter((fav) => fav.imdbID !== movieItem.imdbID);
      } else {
        // add to favorites
        return [...prevFavorites, movieItem];
      }
    });
  }
  

  if (!moviedetail) return <Typography>Loading...</Typography>;
  return (
    <Box className='text-amber-100 flex justify-between'>
      <Card className='w-1/3'>
        <CardMedia component="img"
         image={moviedetail.Poster && moviedetail.Poster !=="N/A" ? moviedetail.Poster :defaultImage}/>
      </Card>
      <Box className='w-2/3'>
      <CardHeader  title={moviedetail.Title}/>
      <CardContent>
        <Typography>
           {moviedetail.Type}
        </Typography>
          <Typography>
           {moviedetail.Year}
        </Typography>
   <Typography>
           {moviedetail.Plot}
        </Typography>   <Typography>
           {moviedetail.Awards}
        </Typography>   <Typography>
           {moviedetail.Writer}
        </Typography>   <Typography>
           {moviedetail.Type}
        </Typography>   <Typography>
           {moviedetail.Type}
        </Typography>


        {favoriteList.some((fav) => fav.imdbID === moviedetail.imdbID) ? (
                <StarIcon  className="text-amber-300"  onClick={() => toggleFavorite(moviedetail)}/>
              ) : (
                <StarBorderIcon
                  className="text-amber-300"
                  onClick={() => toggleFavorite(moviedetail)}
                />
              )}
      </CardContent>
      </Box>
    </Box>
  );
}

export default ProductDetails;
