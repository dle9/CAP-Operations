/**
 * Author: Deric Le
 * Description: Test page
 */

import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello-world/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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