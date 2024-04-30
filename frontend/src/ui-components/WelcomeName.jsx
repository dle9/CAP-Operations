import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useMsal } from "@azure/msal-react";

const WelcomeMessage = ({ isLoading, name }) => (
 <Box sx={{ 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '30vh',
    marginTop: '2rem',
 }}>
    <Typography variant="h5">
      Welcome {isLoading ? <CircularProgress /> : name}
    </Typography>
    <br/>
    <br/>
 </Box>
);

const WelcomeName = () => {
    // get the msal instance
    const { instance, inProgress } = useMsal();
    const [name, setName] = useState(null);

    // retrieve the account name
    useEffect(() => {
        const activeAccount = instance.getActiveAccount();
        if (activeAccount) {
            setName(activeAccount.name.split(' ')[0]);
        } else {
            setName(null);
        }
    }, [instance]);

    return (
        <WelcomeMessage isLoading={inProgress === "login" || !name} name={name} />
    );
};

export default WelcomeName;