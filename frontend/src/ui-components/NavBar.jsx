import { useIsAuthenticated } from "@azure/msal-react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HomeButton from "./HomeButton";
import { SignOutButton } from "./authentication/SignOutButton";

const NavBar = () => {
    const isAuthenticated = useIsAuthenticated();

    // signin screen
    if (isAuthenticated) {
        return (
            <div sx={{ flexGrow: 1 }}>
                <AppBar 
                position="static" 
                sx={{ 
                    borderColor: 'primary.main', 
                    backgroundColor: 'background.secondary', 
                    borderWidth: '1px', borderStyle: 'solid', borderRadius: 3,
                }}>
                <Toolbar>
                    <HomeButton />
    
                    <Typography sx={{ flexGrow:1, fontSize: { xs: 20, sm: 22, md: 24 }, marginLeft: 1 }} variant="h5">
                        CAP Operations: Cyber Response
                    </Typography>
    
                    <SignOutButton />
                </Toolbar>
                </AppBar>
            </div>
        );
    } else {
        return null;
    }
};

export default NavBar;