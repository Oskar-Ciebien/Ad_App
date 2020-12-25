// Imports from React and App.css
import React from 'react';
import '../App.css';

// Content Class Component - Inherits from React.Component
export class Content extends React.Component{

    // Render
    render(){
        return(
            <div className="App">
                <h1>Welcome to SwiftAds</h1>
                <br></br>
                <h4>To make a new ad click <a href= "/create">{""}here</a></h4>
                <h4>To see all ads click <a href= "/read">{""}here</a></h4>
            </div>
        ); // Return end
    } // Render End
} // Class End