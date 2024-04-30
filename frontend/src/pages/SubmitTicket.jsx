import Typography from "@mui/material/Typography";

import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../msalConfig";

import { Loading } from "../ui-components/authentication/Loading";
import { ErrorComponent } from "../ui-components/authentication/ErrorComponent";

const SubmitTicketContent = () => {
  return (
    <Typography variant="h6" sx={{ textTransform: 'none', fontSize: { xs: 18, sm: 20, md: 22 } }}>
      SubmitTicket: Work in Progress
    </Typography>
  );
};


export function SubmitTicket() {
  // copy all properties from login request to auth request
  const authRequest = {
      ...loginRequest
  };

  // if user isn't authenticated: submit auth request
  // if user is authenticated: load SubmitTicket content
  return (
      <MsalAuthenticationTemplate 
          interactionType={InteractionType.Popup} 
          authenticationRequest={authRequest} 
          errorComponent={ErrorComponent} 
          loadingComponent={Loading}
      >
          <SubmitTicketContent />
      </MsalAuthenticationTemplate>
    )
};