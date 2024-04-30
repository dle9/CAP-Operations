import React from 'react';
import NavBar from "./NavBar";

export const PageLayout = (props) => {
    return (
        <>
            {/* the global navigation bar */}
            <NavBar />
            
            {/* All pages are loaded here */}
            {props.children}
        </>
    );
};
