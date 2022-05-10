import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { ListItemSecondaryAction } from "./styled";




const CandidadeItens = () => {

    return <ListItem>
                  

    <ListItemText
        primary="Candidato 1" 
      />

      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <ThumbUpIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <ThumbDownIcon />
        </IconButton>
      </ListItemSecondaryAction>

    </ListItem>
}

export default CandidadeItens