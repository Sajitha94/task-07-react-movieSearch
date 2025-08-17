import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ExpandMore } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useMovieData } from './MovieFetchData';
import { Box } from '@mui/material';
import defaultImage from '../assets/noImage.png'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function MovieCard() {
const { movie } = useMovieData();
console.log(movie,"p");

  return (
    <Box  className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  place-items-center gap-3 lg:px-24 md:px-10'>
      {movie.map((movieList,idx)=>(
      <Card sx={{ height:"95vh",
        width:{lg:"25vw"},display:"flex",flexDirection:"column",background:"#121212",border:"1px solid #424242",borderRadius:"10px"}} key={idx}>
     
      <CardMedia
        component="img"
        
        sx={{ height: "75vh"}} 
        image={movieList.Poster && movieList.Poster  !== "N/A" ? movieList.Poster : defaultImage}
        alt={movieList.Title}
        onError={(e)=>e.currentTarget.src=defaultImage}
      />
       <CardHeader style={{color:"#e7ebf0",padding:"5px"}}
        title={movieList.Title}
      />
     <CardContent  style={{color:"#9aa4b2",padding:"5px"}}>
      <Typography>{movieList.Year} <FiberManualRecordIcon sx={{ fontSize: 8, mx: 1 }} /> {movieList.Type}</Typography>
        <Typography variant="body2"  sx={{color:"#5da9e9",cursor:"pointer"}}>
          Details <ArrowForwardIcon/>
        </Typography>
      </CardContent>
    
    </Card>
     ))}
     
    </Box>
  )
}

export default MovieCard