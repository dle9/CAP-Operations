// /**
//  * Author: Deric Le
//  * Description: Embedded google document
//  */

// import '../assets/styles/Manual.css'

// import React from 'react';

// function Manual() {
//     return (
//         <div className='manual-container'>
//             <div className='manual-content'>
//                 <iframe title="link to CAPOPs manual" src="https://docs.google.com/document/d/1KHTTKmqW1DhnMfh7q4gUF8pJdvkGUtWhaOIYMB2dU4Y/preview"></iframe>
//             </div>
//             <div className='footer'>
//                 <a className='text' rel="noreferrer" target='_blank' href='https://docs.google.com/document/d/1KHTTKmqW1DhnMfh7q4gUF8pJdvkGUtWhaOIYMB2dU4Y/'>
//                     Link to Manual
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default Manual;

import Typography from "@mui/material/Typography";

import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../msalConfig";

import { Loading } from "../ui-components/authentication/Loading";
import { ErrorComponent } from "../ui-components/authentication/ErrorComponent";

const ManualContent = () => {
  return (
    <Typography variant="h6" sx={{ textTransform: 'none', fontSize: { xs: 18, sm: 20, md: 22 } }}>
      Manual: Work in Progress
    </Typography>
  );
};


export function Manual() {
  // copy all properties from login request to auth request
  const authRequest = {
      ...loginRequest
  };

  // if user isn't authenticated: submit auth request
  // if user is authenticated: load Manual content
  return (
      <MsalAuthenticationTemplate 
          interactionType={InteractionType.Popup} 
          authenticationRequest={authRequest} 
          errorComponent={ErrorComponent} 
          loadingComponent={Loading}
      >
          <ManualContent />
      </MsalAuthenticationTemplate>
    )
};