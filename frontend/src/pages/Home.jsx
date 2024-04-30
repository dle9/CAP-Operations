import { Link as RouterLink } from "react-router-dom";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

import WelcomeName from '../ui-components/WelcomeName';
import Login from './Login';

// styling for the buttons on Authenticated home screen
const AuthenticatedHomeButtons  = ({ to, children }) => (
  <Button component={RouterLink} to={to} variant="contained" 
    sx={{ 
      borderColor: 'primary.main', 
      backgroundColor: 'background.secondary', 
      borderWidth: '1px', borderStyle: 'solid', borderRadius: 6,
    }}>
    <Typography variant="h6" sx={{ textTransform: 'none', fontSize: { xs: 22, sm: 22, md: 22 } }}>
      {children}
    </Typography>
  </Button>
);

export function Home() {
  
  // what Pages are accessible through 
  // authenticated Home screen?
  const authenticatedRoutes = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/manual", label: "Manual" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      {/* user is authenticated. show the Home UI */}
      <AuthenticatedTemplate> 

        <WelcomeName />

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '50' }}>
          <ButtonGroup  
            orientation="vertical" size="large" variant='plain'
            sx={{ '& > :not(:first-of-type)': { mt: { xs: 1, sm: 1, md: 2 } } }}
          >
            {/* routes should still be protected using msal instance! */}
            {authenticatedRoutes.map((route, index) => (
                <AuthenticatedHomeButtons to={route.to} key={index}>
                  {route.label}
                </AuthenticatedHomeButtons>
            ))}

          </ButtonGroup>
        </Box>
      </AuthenticatedTemplate>
          
      {/* user is not authenticated. show login page */}
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </>
  );
}
