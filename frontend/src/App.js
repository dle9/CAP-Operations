/**
 * Author: Deric Le
 * Description: The application. Integrates the components
 */

import "./assets/styles/App.css"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

// Import components
// import HelloWorld from './components/HelloWorld';
import Header from "./components/Header";
import Carousel from "./components/Carousel/Carousel";
import Manual from "./components/Manual";
import About from "./components/About";

import React from "react";

function App() {
  return (
    // render the 'HelloWorld' component
    // <HelloWorld />

    <>
    
      <Router>
        <Header />
        <Routes>
          < Route path="/" element={<Carousel />} />
          < Route path="/manual" element={<Manual />} />
          < Route path="/about" element={<About />} />
          < Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
