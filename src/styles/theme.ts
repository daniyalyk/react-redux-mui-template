import { createTheme, ThemeOptions } from '@mui/material';
export const appTheme: ThemeOptions = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#EAEAEA',
      dark: '#1A1A1A'
    },
    secondary: {
      main: '#edf2ff',
    },

  },
  typography: {
    fontFamily: 'BalooBhaiJaan2',
    h1: {
      fontSize: '3rem',
      color: '#000000',
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {
      color: 'white',
    },
    h6: {
      color: 'white',
    },
    body1: {},
    body2: {},
  },
  components: {

  },
});
