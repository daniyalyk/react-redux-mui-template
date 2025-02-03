import { createTheme, ThemeOptions } from '@mui/material';

const globalTheme = createTheme({
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
      light: '#EAEAEA',
      dark: '#1A1A1A'
    },
    secondary: {
      main: '#edf2ff',
    },

  },
})
export const appTheme: ThemeOptions = createTheme({
  ...globalTheme,
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
      color: globalTheme.palette.primary.light,
    },
    h6: {
      color: globalTheme.palette.primary.light,
    },
    body1: {},
    body2: {},
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 600,
          textTransform: 'none',
          padding: '10px 20px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#007BFF',
          },
          '&:active': {
            backgroundColor: '#0056b3',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.5)',
          },
        },
        contained: {
          backgroundColor: globalTheme.palette.primary.dark,
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0056b3',
          },
          '&:active': {
            backgroundColor: '#003f7f',
          },
        },
        text: {
          color: globalTheme.palette.primary.dark,
          '&:hover': {
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
          },
          '&:active': {
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
          },
        },
        outlined: {
          borderColor: globalTheme.palette.primary.dark,
          color: globalTheme.palette.primary.dark,
          '&:hover': {
            borderColor: '#0056b3',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
          },
          '&:active': {
            borderColor: '#003f7f',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: globalTheme.palette.primary.dark,
          '&.Mui-focused': {
            color: globalTheme.palette.primary.dark,
          },
        },
        asterisk: {
          color: 'rgba(0,0,0, 1)'
        }
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '10px !important',
          background: 'transparent',
          // boxShadow: '0px 0px 4px 0px rgba(0,0,0, 1) inset',

          '&.Mui-disabled': {
            background: 'rgba(13, 31, 35, 0.05)',
            boxShadow: '0px 0px 4px 0px rgba(13, 31, 35, 0.10) inset',
          },

        },
        input: {
          '&:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 100px white inset',
            '-webkit-text-fill-color': '#000',
            backgroundColor: '#ffffff',


          },
          '&:-internal-autofill-selected': {
            '-webkit-box-shadow': '0 0 0 100px white inset',
            '-webkit-text-fill-color': '#000',
            backgroundColor: '#ffffff'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: globalTheme.palette.primary.dark,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '2px solid rgba(0,0,0, 0.7)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid rgba(0,0,0, 1)',
          },
        },
        notchedOutline: {
          border: '1px solid rgba(0,0,0, 0.7)',
        },
        input: {
          color: globalTheme.palette.primary.dark,
        }
      },
    },
  },
});
