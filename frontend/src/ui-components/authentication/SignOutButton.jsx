import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { Menu, IconButton, MenuItem } from '@mui/material';
import Logout from "@mui/icons-material/Logout";
import { AccountPicker } from "./AccountPicker";

export const SignOutButton = () => {
    // get msal instance
    const { instance } = useMsal();
    const [accountSelectorOpen, setOpen] = useState(false);

    // variables for the logout popup
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleLogout = () => {
        setAnchorEl(null);
        instance.logoutRedirect();
    }

    const handleAccountSelection = () => {
        setAnchorEl(null);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton
                onClick={(event) => setAnchorEl(event.currentTarget)}
                color="inherit"
                sx={{marginRight: -1}}
            >
                <Logout sx={{ color: 'white' }} />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
                sx={{
                    "& .MuiMenu-paper": {
                        backgroundColor: "background.secondary", 
                    },
                }}
            >
                <MenuItem onClick={() => handleAccountSelection()} key="switchAccount">Switch Account</MenuItem>
                <MenuItem onClick={() => handleLogout("redirect")} key="logoutRedirect">Logout</MenuItem>
            </Menu>

            <AccountPicker open={accountSelectorOpen} onClose={handleClose} />
        </div>
    )
};