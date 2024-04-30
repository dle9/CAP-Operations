/**
 * Author: Deric Le
 * Description: The application. Integrates the pages and components
*/

import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { CustomNavigationClient } from "./utils/NavigationClient";

// Pages
import { PageLayout } from "./ui-components/PageLayout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Manual } from "./pages/Manual";
import { About } from "./pages/About";
import { SubmitTicket } from "./pages/SubmitTicket";

// pca is the PublicClientApplication from ./index.js
function App({ pca }) {

  // override default navigation withs custom navigation 
  // designed for client-side routing auth processes  
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  // wrapping Pages with MSALProvider all children 
  // to have access to msal context, hooks, components
  return (
    <MsalProvider instance={pca}>

        {/* All pages are loaded into PageLayout.jsx */}
        <PageLayout>
          <Pages />
        </PageLayout>
        
    </MsalProvider>
  );
  
}

// define the pages in the application
function Pages() {
  return (
    <Routes>
      < Route path="/" element={<Home />} />
      < Route path="/profile" element={<Profile />} />
      < Route path="/dashboard" element={<Dashboard />} />
      < Route path="/manual" element={<Manual />} />
      < Route path="/about" element={<About />} />
      < Route path="/submit-a-ticket" element={<SubmitTicket />} />
    </Routes>
  );
}
export default App;