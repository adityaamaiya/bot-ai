import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', 'Open Sans'].join(','),
  },
  palette: {
    primary: {
      main: 'rgba(151, 133, 186, 1)',
      light: 'rgba(175, 159, 205, 1)',
      dark: 'rgba(249, 250, 250, 1)',
    },
    secondary: {
      main: 'rgba(215, 199, 244, 1)',
      light: 'rgba(255, 255, 255, 1)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderWidth: '1px',
          borderStyle: 'solid',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0.45)',
        },
      },
    },
  },
});

export default theme;
