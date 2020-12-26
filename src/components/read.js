// Imports
import React from 'react';
import axios from 'axios';
import { Ads } from './ads';

// Read Class Component - Inherits from React.Component
export class Read extends React.Component {
    // Constructor
    constructor() {
        super();

        // Setting ReloadData
        this.ReloadData = this.ReloadData.bind(this);
    } // Constructor END

    // State
    state = {
        ads: []
    };

    // ReloadData Method
    ReloadData() {
        // HTTP Axios get information
        axios.get('http://localhost:4000/api/ads')
            .then((response) => {
                // Set data retrieved to ads
                this.setState(
                    {
                        ads: response.data
                    }
                ) // setState END
                // Prints response and ads state
                console.log(response.data.myads)
                console.log(this.state.ads)
            }) // then END
            // If error - print to console
            .catch((error) => {
                console.log(error);
            }); // catch END
    } // ReloadData() END

    // componentDidMount Method
    componentDidMount() {
        // HTTP Axios get information
        axios.get('http://localhost:4000/api/ads')
            .then((response) => {
                // Set data retrieved to ads
                this.setState(
                    {
                        ads: response.data
                    }
                )// setState END
                // Prints response and ads state
                console.log(response.data.myads)
                console.log(this.state.ads)
            }) // then END
            // If error - print to console
            .catch((error) => {
                console.log(error);
            }); // catch END
    } // componentDidMount() END

    // Print everything to page
    render() {
        return (
            // read.js Main Code
            <div>
                {/* Breaks */}
                <br></br>
                {/* Prints data */}
                <Ads myads={this.state.ads} ReloadData={this.ReloadData}></Ads>
            </div>
        ); // Return END
    } // render() END
} // class END