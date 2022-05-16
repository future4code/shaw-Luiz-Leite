import React from 'react';
import { FeedContainer, ButtonDiv } from './Styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useRequestData from '../../Components/Hooks/useRequestData';
import {BASE_URL} from '../../Components/Url'





export const FeedPage = () => {
    const recipes = useRequestData ([],`${BASE_URL}/posts`)
    console.log (recipes)


    
    

    
    return (

        <FeedContainer>
            <h1>Feed</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            labeddit
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Escreva 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
            <br/>
            <ButtonDiv>
                <Button type={'submit'} variant={'contained'} color={'primary'} > Postar </Button>
            </ButtonDiv>
        </FeedContainer>

    );
}


export default FeedPage





