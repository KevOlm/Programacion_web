import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Card_character = ({character}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={character ? character.image : noimage}
          alt={character ? character.name : 'Unknown'}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character ? character.name : 'Unknown'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {character ? character.description : 'No description available.'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Card_character;