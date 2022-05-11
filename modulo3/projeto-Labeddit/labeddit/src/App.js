import { ThemeProvider } from '@mui/material';
import React from 'react';
import { RouterPage } from './Routes/Router';
import theme from './Components/Theme';


function App() {

  
  return (

     <ThemeProvider theme={theme}>
     <RouterPage/>
     </ThemeProvider>
    
  );
}

export default App;