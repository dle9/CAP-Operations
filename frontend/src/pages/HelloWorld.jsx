/**
 * Author: Deric Le
 * Description: Test page
 */

import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  // define a state (basically a variable; this method is better for performance and rendering)
  const [message, setMessage] = useState('');

  // used to toggle between API requests
  const [toggle, setToggle] = useState(true);
  
  // send a GET request to backend. look up how useEffect() works.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          toggle
            ? 'http://localhost:8000/api/hello-world1/'
            : 'http://localhost:8000/api/temp/hello-world2/'
        );
        setMessage(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      setToggle(prevToggle => !prevToggle);
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [toggle]);

  // the content that is rendered to the frontend
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <p>{message}</p>
      </header>
    </div>
  );
}

export default HelloWorld;