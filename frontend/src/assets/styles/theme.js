import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#EACE7A', // yellow - navbar
    },
    secondary: {
      main: '#C79F34', // gold
    },
    background: {
      primary: '#161616',
      secondary: '#262626'
    },
    error: {
      main: red[400],
    },
  },
  typography: {
    fontFamily: [
      '"Source Code Pro"',
      'monospace',
    ].join(','),
    allVariants: {
      color: '#fff', // Set text color to white for all typography variants
    },
 },
});