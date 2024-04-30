import { Link as RouterLink } from 'react-router-dom';
import { IconButton, CircularProgress } from '@mui/material';
import Home from "@mui/icons-material/Home";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const HomeButton = () => {
    const isAuthenticated = useIsAuthenticated();
    const { inProgress } = useMsal();

    if (inProgress === "login") {
        return <CircularProgress />;
    } else if (isAuthenticated) {
        return (
            <RouterLink component={IconButton} to="/">
                <Home sx={{ color: 'white', marginLeft: -1 }} />
            </RouterLink>
        );
    } else {
        return null;
    }
}

export default HomeButton;