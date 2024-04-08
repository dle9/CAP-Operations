/**
 * Author: Deric Le
 * Description: Embedded google document
 */

import '../assets/styles/Manual.css'

import React from 'react';

function Manual() {
    return (
        <div className='manual-container'>
            <div className='manual-content'>
                <iframe title="link to CAPOPs manual" src="https://docs.google.com/document/d/1KHTTKmqW1DhnMfh7q4gUF8pJdvkGUtWhaOIYMB2dU4Y/preview"></iframe>
                <a target="_blank" href="https://docs.google.com/document/d/1KHTTKmqW1DhnMfh7q4gUF8pJdvkGUtWhaOIYMB2dU4Y/" />
            </div>
            <div className='footer'>
                <a className='text' target='_blank' href='https://docs.google.com/document/d/1KHTTKmqW1DhnMfh7q4gUF8pJdvkGUtWhaOIYMB2dU4Y/'>
                    Link to Manual
                </a>
            </div>
        </div>
    );
}

export default Manual;
