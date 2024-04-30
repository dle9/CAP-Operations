// /**
//  * Author: Deric Le
//  * Description: About the author
//  */

// import '../assets/styles/About.css'
// import DericBg from '../assets/images/anonymous.jpg'

// import React from 'react';

// function About() {
//     return (
//         <div className="About">
//             <div className="list"> 
//                 <div className='item'>
//                 <img src={DericBg} alt="Deric's background"/>
//                     <div className='content'>
//                         <p>Class of 2021-2025</p>
//                         <h2>Deric Le</h2>
//                         <p>Howdy! I made this website for fellow CAP students. Feel free to contribute.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;

import Typography from "@mui/material/Typography";

import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../msalConfig";

import { Loading } from "../ui-components/authentication/Loading";
import { ErrorComponent } from "../ui-components/authentication/ErrorComponent";

const AboutContent = () => {
  return (
    <Typography variant="h6" sx={{ textTransform: 'none', fontSize: { xs: 18, sm: 20, md: 22 } }}>
      About: Work in Progress
    </Typography>
  );
};


export function About() {
  // copy all properties from login request to auth request
  const authRequest = {
      ...loginRequest
  };

  // if user isn't authenticated: submit auth request
  // if user is authenticated: load About content
  return (
      <MsalAuthenticationTemplate 
          interactionType={InteractionType.Popup} 
          authenticationRequest={authRequest} 
          errorComponent={ErrorComponent} 
          loadingComponent={Loading}
      >
          <AboutContent />
      </MsalAuthenticationTemplate>
    )
};