// SOURCE : https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/react-router-sample

import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import IconButton from '@mui/material/IconButton';
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { AccountPicker } from "../AccountPicker";

export const SignOutButton = () => {
    const { instance } = useMsal();
    const [accountSelectorOpen, setOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleLogout = (logoutType) => {
        setAnchorEl(null);

        if (logoutType === "popup") {
            instance.logoutPopup();
        } else if (logoutType === "redirect") {
            instance.logoutRedirect();
        }
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
                <AccountCircle sx={{ color: 'white' }} />
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