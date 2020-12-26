// Imports
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

// AdItem Class Component - Inherits from React.Component
export class AdItem extends React.Component {

    // Constructor
    constructor() {
        super();

        // Sets DeleteAd
        this.DeleteAd = this.DeleteAd.bind(this);
    } // Constructor - End

    // DeleteAd Method
    DeleteAd(e) {
        // Prevent method from being called all the time
        e.preventDefault();

        // Console Logs successful deletion
        console.log("Delete pressed!" + this.props.myad._id);

        // Removes item
        axios.delete('http://localhost:4000/api/ads/' + this.props.myad._id)
        .then(() => {
            this.props.ReloadData();
        }) // Then - End
        .catch((err) => {
            console.log(err);
        }); // Catch - End
    } // DeleteAd(e) - End

    // Render
    render() {
        // CSS Styles
        // adName
        const adName = {
            color: "black",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
            fontSize: "20px"
        } // adName - End

        // adDescription
        const adDescription = {
            color: "black",
            fontFamily: "Times New Roman",
            fontSize: "17px"
        } // adDescription - End

        // Return
        return (
            // AdItem Main Code
            <div>
                {/* Card with Ad Details */}
                <Card>
                    {/* Card Header with Ad Name */}
                    <Card.Header style={adName}>{this.props.myad.Name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* Image of the Ad Image */}
                            <img src={this.props.myad.Image} width="300" height="200" alt="Ad Image"/>
                            <footer style={adDescription} className="blockquote-footer">
                                {/* Break */}
                                <br></br>
                                {/* Ad Year in Footer */}
                                {this.props.myad.Description}
                            </footer>
                        </blockquote>

                        {/* Breaker Line */}
                        <hr></hr>

                        {/* Button to delete a ad */}
                        <Button variant="warning" onClick={this.DeleteAd}>Delete</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {/* Edit button to edit ad */}
                        <Link to={'/edit/'+ this.props.myad._id} className='btn btn-primary'>Update</Link>
                    </Card.Body>
                </Card>
            </div>
        ); // Return END
    } // Render END
} // Class END