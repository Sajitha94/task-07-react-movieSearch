import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MYKEY, REST_HOST_API } from "../moviedb";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import defaultImage from "../assets/noImage.png";
import { useMovieData } from "../components/MovieFetchData";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function ProductDetails() {
  const [moviedetail, setMovieDetail] = useState(null);
  const { favoriteList, setFavoriteList } = useMovieData();
  const { omdId } = useParams();

  useEffect(() => {
    if (!omdId) return;
    fetch(`${REST_HOST_API}/?apikey=${MYKEY}&i=${omdId}&plot=full`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieDetail(data);
      })
      .catch((err) => console.log(err));
  }, [omdId]);
  console.log(moviedetail, "moviedetail");

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
    <Box  className='my-10'>
      <Card className=" flex lg:flex-row flex-col justify-between bg-transparent lg:mx-20 mx-4" sx={{backgroundColor:"transparent", color:"white" }}>
      <Box className="lg:w-2/4 ">
        <CardMedia
          component="img"
          image={
            moviedetail.Poster && moviedetail.Poster !== "N/A"
              ? moviedetail.Poster
              : defaultImage
          }
          className="rounded-2xl"
        />
        {favoriteList.some((fav) => fav.imdbID === moviedetail.imdbID) ? (
          <Button
            sx={{ backgroundColor: "#212121", width: "100%",borderRadius:"8px",marginTop:"8px"}}
            onClick={() => toggleFavorite(moviedetail)}
          >
            <StarIcon className="text-amber-500" />
            <span className="text-amber-500">
              <strong>In Favorites</strong>
            </span>
          </Button>
        ) : (
          <Button
            sx={{ backgroundColor: "#212121", width: "100%",borderRadius:"8px",marginTop:"8px"}}
            onClick={() => toggleFavorite(moviedetail)}
          >
            <StarBorderIcon className="text-amber-500" />
            <span className="text-amber-500 py-1">
              <strong> Add to Favorites</strong>
            </span>
          </Button>
        )}
    </Box>
      <Box className="lg:w-3/4  h-2/4">
        <CardHeader title={moviedetail.Title} sx={{padding:"0", paddingLeft:"14px",paddingTop:{xs:"10px", md:"0"}}} />
        <CardContent className="flex gap-5 flex-col"> 
          <Box className="flex flex-col ">
            <Box className="flex   items-center">
              <Typography>{moviedetail.Year}</Typography>
              <FiberManualRecordIcon sx={{ fontSize: 8, mx: 1 }} />{" "}
              <Typography>{moviedetail.Rated}</Typography>
              <FiberManualRecordIcon sx={{ fontSize: 8, mx: 1 }} />{" "}
              <Typography>{moviedetail.Runtime}</Typography>
            </Box>
            <Typography>{moviedetail.Genre}</Typography>
          </Box>
          <Typography>{moviedetail.Plot}</Typography>{" "}
          <Box className="flex  md:flex-row flex-col justify-between ">
            <Box className="flex flex-col gap-2 ">
              <Typography>
                <strong>Director: </strong>
                <span className="text-gray-400 text-md">{moviedetail.Director}</span>
              </Typography>{" "}
              <Typography>
                <strong>Cast: </strong>
                <span className="text-gray-400 text-md">{moviedetail.Actors}</span>
              </Typography>{" "}
              <Typography>
                <strong>Country:</strong> <span className="text-gray-400 text-md">{moviedetail.Country}</span>
              </Typography>{" "}
            </Box>
            <Box className="flex flex-col gap-2">
              <Typography>
                <strong> Writer: </strong> <span className="text-gray-400 text-md">{moviedetail.Writer}</span>
              </Typography>{" "}
              <Typography>
                {" "}
                <strong>Released:</strong>
              <span className="text-gray-400 text-md">  {moviedetail.Released}</span>
              </Typography>{" "}
              <Typography>
                <strong>Language: </strong> <span className="text-gray-400 text-md">{moviedetail.Language}</span>
              </Typography>{" "}
            </Box>
          </Box>
          {Array.isArray(moviedetail.Ratings) &&
            moviedetail.Ratings.length > 0 && (
              <Box>
                <h3>
                  {" "}
                  <strong className="text-amber-200">Ratings</strong>
                </h3>
                <ul>
                  {moviedetail.Ratings.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.Source}:</strong><span className="text-slate-400 text-md px-2">{moviedetail.Director} {item.Value}</span>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
        </CardContent>
      </Box>
        </Card>
    </Box>
  );
}

export default ProductDetails;
