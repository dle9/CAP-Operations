/**
 * Author: Deric Le
 * Description: About the author
 */

import BirdsBackground from '../assets/images/birds.png'

import React from 'react';

function About() {
    return (
        <div className="About">
            <div className="list"> 
                <div className='item'>
                <img src={BirdsBackground} />
                    <div className='content'>
                        <p>Class of 2021-2025</p>
                        <h2>Deric Le</h2>
                        <p>Howdy! I made this website for fellow CAP students. Feel free to contribute.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;