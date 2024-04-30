import { useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";
import { loginRequest } from "../../msalConfig";
import { Typography } from "@mui/material";

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginRequest);
    };

    return (
        <Button
            onClick={handleLogin}
            color="inherit"
        >
            <Typography variant="h5" sx={{ textTransform: 'none', fontSize: { xs: 20, sm: 22, md: 24 } }}>
                Login
            </Typography>
        </Button>
    );
};
