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
            sx={{ backgroundColor: "#212121", width: "100%",borderRadius:"8px",marginTop:"5px"}}
            onClick={() => toggleFavorite(moviedetail)}
          >
            <StarIcon className="text-amber-500" />
            <span className="text-amber-500">
              <strong>In Favorites</strong>
            </span>
          </Button>
        ) : (
          <Button
            sx={{ backgroundColor: "#212121", width: "100%",borderRadius:"8px",marginTop:"5px"}}
            onClick={() => toggleFavorite(moviedetail)}
          >
            <StarBorderIcon className="text-amber-500" />
            <span className="text-amber-500">
              <strong> Add to Favorites</strong>
            </span>
          </Button>
        )}
    </Box>
      <Box className="lg:w-3/4">
        <CardHeader title={moviedetail.Title} />
        <CardContent>
          <Box className="flex flex-col">
            <Box className="flex gap-1  items-center">
              <Typography>{moviedetail.Year}</Typography>
              <FiberManualRecordIcon sx={{ fontSize: 8, mx: 1 }} />{" "}
              <Typography>{moviedetail.Rated}</Typography>
              <FiberManualRecordIcon sx={{ fontSize: 8, mx: 1 }} />{" "}
              <Typography>{moviedetail.Runtime}</Typography>
            </Box>
            <Typography>{moviedetail.Genre}</Typography>
          </Box>
          <Typography>{moviedetail.Plot}</Typography>{" "}
          <Box className="flex   justify-between items-center">
            <Box className="flex flex-col gap-2">
              <Typography>
                <strong>Director: </strong>
                {moviedetail.Director}
              </Typography>{" "}
              <Typography>
                <strong>Cast: </strong>
                {moviedetail.Actors}
              </Typography>{" "}
              <Typography>
                <strong>Country:</strong> {moviedetail.Country}
              </Typography>{" "}
            </Box>
            <Box className="flex flex-col gap-2">
              <Typography>
                <strong> Writer: </strong> {moviedetail.Writer}
              </Typography>{" "}
              <Typography>
                {" "}
                <strong>Released:</strong>
                {moviedetail.Released}
              </Typography>{" "}
              <Typography>
                <strong>Language: </strong> {moviedetail.Language}
              </Typography>{" "}
            </Box>
          </Box>
          {Array.isArray(moviedetail.Ratings) &&
            moviedetail.Ratings.length > 0 && (
              <Box>
                <h3>
                  {" "}
                  <strong>Ratings</strong>
                </h3>
                <ul>
                  {moviedetail.Ratings.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.Source}:</strong> {item.Value}
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
