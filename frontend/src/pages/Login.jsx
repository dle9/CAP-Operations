import { Box, Typography } from '@mui/material';
import { SignInButton } from "../ui-components/authentication/SignInButton";

function Login() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderColor: 'primary.main',
          backgroundColor: 'background.secondary',
          borderWidth: '1px',
          borderStyle: 'solid',
          width: 666,
          height: 333,
          borderRadius: 9,
      }}>
        <Typography variant='h5' sx={{marginTop: 4}}>
          <center>
            CAP Operations: Cyber Response
          </center>
          <br/>
        </Typography>
        <SignInButton />
      </Box>
    </Box>
  );
}

export default Login;