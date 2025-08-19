import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useMovieData } from "./MovieFetchData";
import { Box } from "@mui/material";
import defaultImage from "../assets/noImage.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
function MovieCard({ favoriteListItem }) {
  const { movie, favoriteList, setFavoriteList } = useMovieData();
  const navigate = useNavigate();

  const movieListItem =
    favoriteListItem && favoriteListItem.length > 0 ? favoriteListItem : movie;
  console.log(favoriteListItem, "favoriteListItem34");

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

  return (
    <Box className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  place-items-center gap-3 lg:px-24 md:px-10 px-3">
      {movieListItem.map((movieList, idx) => (
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#121212",
            border: "1px solid #424242",
            borderRadius: "10px",
          }}
          key={idx}
        >
          <CardMedia
            component="img"
            sx={{ height: "100%", width: "100%", objectFit: "cover" ,cursor:"pointer"}}
            image={
              movieList.Poster && movieList.Poster !== "N/A"
                ? movieList.Poster
                : defaultImage
            }
            alt={movieList.Title}
            onError={(e) => (e.currentTarget.src = defaultImage)}
            onClick={() => {
              navigate(`/moviedetail/${movieList.imdbID}`);
            }}
          />
          <CardHeader
            style={{ color: "#e7ebf0", padding: "5px"  }}
            titleTypographyProps={{ fontSize: "16px" }}
            title={movieList.Title}
          />
          <CardContent style={{ color: "#9aa4b2", padding: "5px" }}>
            <Typography>
              {movieList.Year}{" "}
              <FiberManualRecordIcon sx={{ fontSize: 8, mx: 1 }} />{" "}
              {movieList.Type}
            </Typography>
            <Box className="flex justify-between">
              {" "}
              <Typography
                variant="body2"
                sx={{ color: "#5da9e9", cursor: "pointer" }}
                onClick={() => {
                  navigate(`/moviedetail/${movieList.imdbID}`);
                }}
              >
                Details <ArrowForwardIcon />
              </Typography>
              {favoriteList.some((fav) => fav.imdbID === movieList.imdbID) ? (
                <StarIcon  className="text-amber-300 cursor-pointer"  onClick={() => toggleFavorite(movieList)}/>
              ) : (
                <StarBorderIcon
                  className="text-amber-300 cursor-pointer"
                  onClick={() => toggleFavorite(movieList)}
                />
              )}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default MovieCard;
