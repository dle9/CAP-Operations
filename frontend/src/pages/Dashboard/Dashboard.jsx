// /**
//  * Author: Deric Le
//  * Description: The carousel/slideshow thingy
//  */

// import '../../assets/styles/Dashboard.css';

// import Thumbnails from './Thumbnails';
// import Conductor from './Conductor';
// import useKeyboardControls from './controls/keyboardControls';

// import React, { useState } from 'react';

// function Dashboard() {
//     // init variables
//     const carouselTimer = 3333;
//     const [itemActive, setItemActive] = useState(0);
//     const [isLocked, setIsLocked] = useState(false);
    
//     // variable containing all API data
//     const items = Conductor();

//     // import kb controls
//     useKeyboardControls(
//         isLocked, setIsLocked,
//         items, itemActive, setItemActive, 
//         carouselTimer
//     );

//     return (
//         <div>
//             <div className="Dashboard">
//                 <div className="list">
//                     {items.map((item, index) => (
//                         <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
//                             <img src={item.background} alt={`${item.name} background`} />
//                             <div className="content">
//                                 <p>{item.details}</p>
//                                 <h2>{item.name}</h2>
//                                 <p>{item.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//             <Thumbnails isLocked={isLocked} setIsLocked={setIsLocked} items={items} itemActive={itemActive} setItemActive={setItemActive} />

//             <footer>
//                 <div>Navigate w/ Arrow Keys</div>
//                 <div>Press 'Space' to Pause</div>
//                 <div>Mouse controls intuitive</div>
//             </footer>
            
//         </div>
//     );
// }

// export default Dashboard;

import Typography from "@mui/material/Typography";

import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../../msalConfig";

import { Loading } from "../../ui-components/authentication/Loading";
import { ErrorComponent } from "../../ui-components/authentication/ErrorComponent";

const DashboardContent = () => {
  return (
    <Typography variant="h6" sx={{ textTransform: 'none', fontSize: { xs: 18, sm: 20, md: 22 } }}>
      Dashboard: Work in Progress
    </Typography>
  );
};


export function Dashboard() {
  // copy all properties from login request to auth request
  const authRequest = {
      ...loginRequest
  };

  // if user isn't authenticated: submit auth request
  // if user is authenticated: load Dashboard content
  return (
      <MsalAuthenticationTemplate 
          interactionType={InteractionType.Popup} 
          authenticationRequest={authRequest} 
          errorComponent={ErrorComponent} 
          loadingComponent={Loading}
      >
          <DashboardContent />
      </MsalAuthenticationTemplate>
    )
};