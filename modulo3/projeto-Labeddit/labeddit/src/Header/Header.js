import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonDiv } from '../Header/Styled';
import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../Routes/Coordinator';
import { useState } from 'react';


const Header = () =>{
  const navigate = useNavigate ()
  const token = localStorage.getItem ("token")
  const [rightButtonText , setRightButtonText] = useState (token ? "logout" : "login")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText ("login")
      goToLogin (navigate)
    } else {
      goToLogin (navigate)
    }
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>  
          </Typography>
          <ButtonDiv>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
          </ButtonDiv>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header