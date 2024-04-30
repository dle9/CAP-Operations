import { useMsal } from "@azure/msal-react";
import { Typography, Button } from "@mui/material";
import Lock from '@mui/icons-material/Lock';
import { loginRequest } from "../../msalConfig";

export const SignInButton = () => {
  
  // get the msal instance
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  }

  return (
      <Button
          onClick={handleLogin}
          color="inherit"
          startIcon={<Lock sx={{ color: 'white' }} />}
      >
          <Typography variant ="h6" sx={{ textTransform: 'none' }}>
              Login with Microsoft
          </Typography>
      </Button>
  );
};