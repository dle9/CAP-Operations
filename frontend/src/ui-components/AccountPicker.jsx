// SOURCE : https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/react-router-sample

import React from 'react';
import { useMsal } from "@azure/msal-react";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { loginRequest } from "../msalConfig";

export const AccountPicker = (props) => {
    const { instance, accounts } = useMsal();
    const { onClose, open } = props;

    const handleListItemClick = (account) => {
        instance.setActiveAccount(account);
        if (!account) {
            instance.loginRedirect({
                ...loginRequest,
                prompt: "login"
            })
        } else {
            // To ensure account related page attributes update after the account is changed
            window.location.reload();
        }

        onClose(account);
    };

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
          <DialogTitle id="simple-dialog-title" sx={{ backgroundColor: 'background.secondary' }}>
            Set active account
          </DialogTitle>
          <List sx={{ backgroundColor: 'background.secondary' }}>
            {accounts.map((account) => (
              <ListItem button onClick={() => handleListItemClick(account)} key={account.homeAccountId}>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={account.username}/>
              </ListItem>
            ))}
    
            <ListItem autoFocus button onClick={() => handleListItemClick(null)}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
            </ListItem>
          </List>
        </Dialog>
      );
};