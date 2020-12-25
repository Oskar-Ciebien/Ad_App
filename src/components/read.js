// Imports from React, Ads and Axios
import React from 'react';
import { Ads } from './ads';
import axios from 'axios';

// Read Class Component - Inherits from React.Component
export class Read extends React.Component {

    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

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
                )
                console.log(response.data.myad)
                console.log(this.state.ads)
            })
            // If error - print to console
            .catch((error) => {
                console.log(error);
            });
    }

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
                )
                console.log(response.data.myad)
                console.log(this.state.ads)
            })
            // If error - print to console
            .catch((error) => {
                console.log(error);
            });
    }

    // Print everything to page
    render() {
        return (
            // read.js Main Code
            <div>
                <h3>Hello from Read Component</h3>
                <Ads myad={this.state.ads} ReloadData={this.ReloadData}></Ads>
            </div>
        );
    }

}