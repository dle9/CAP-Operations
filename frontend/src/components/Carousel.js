/**
 * Author: Deric Le
 * Description: Container that holds all components that will be displayed on App
 */

import '../assets/styles/Carousel.css'
import ServiceNowLogo from '../assets/images/servicenow.png'
import CrowdStrikeLogo from '../assets/images/crowdstrike.png'
import ExtraHopLogo from '../assets/images/extrahop.png'

import React, { useState, useEffect } from 'react';

function Carousel() {
    return (
        <div className="Carousel">
            <div className='list'>
                <div className='item-active'>
                    <img src={ServiceNowLogo} />  
                    <div className='content'>
                        <h2>Servicenow</h2>
                    </div>
                </div>
                <div className='item'>
                    <img src={CrowdStrikeLogo} />
                    <div className='content'>
                        <h2>CrowdStrike</h2>
                    </div>
                </div>
                <div className='item'>
                    <img src={ExtraHopLogo} />
                    <div className='content'>
                        <h2>ExtraHop</h2>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Carousel;