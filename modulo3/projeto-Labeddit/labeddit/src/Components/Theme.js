import { createTheme } from '@mui/material';
import { neutraColor, primaryColor} from './Colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'white',
    },
    text: {
        primary: neutraColor
    }
    
  },
});

export default theme

