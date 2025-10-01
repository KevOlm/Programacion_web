import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import HouseCat from "../../assets/housecat.png";

const CardSection = ({data}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          //height="140"
          image={HouseCat}
          alt="Dr House Cat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title? data.title : "Title"}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data.content? data.content : "Content"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardSection