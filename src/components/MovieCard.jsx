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
function MovieCard() {
  return (
     <Card sx={{ maxWidth: 345 }}>
     
      <CardMedia
        component="img"
        height="194"
        image="https://tse1.mm.bing.net/th/id/OIP.FaM_pGqVvzqCJHqngLAsywHaGo?r=0&pid=ImgDet&w=185&h=166&c=7&dpr=1.5"
        alt="Paella dish"
      />
       <CardHeader
        title="Kabali Chorizo Paella"
        subheader=" 2016 movie"
      />
     <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Details <ArrowForwardIcon/>
        </Typography>
      </CardContent>
    
    </Card>
  )
}

export default MovieCard