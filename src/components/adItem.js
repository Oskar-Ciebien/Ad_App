// Imports from React and React Bootstrap and Axios
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

        this.DeleteAd = this.DeleteAd.bind(this);
    }

    // DeleteAd Method
    DeleteAd(e) {
        // Prevent method from being called all the time
        e.preventDefault();

        console.log("Delete pressed!" + this.props.myad._id);

        axios.delete('http://localhost:4000/api/ads/' + this.props.myad._id)
        .then(() => {
            this.props.ReloadData();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            // AdItem Main Code
            <div>
                {/* Card with Ad Details */}
                <Card>
                    {/* Card Header with Ad Name */}
                    <Card.Header>{this.props.myad.Name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* Image of the Ad Image */}
                            <img src={this.props.myad.Image} width="200" height="200" alt="Image"></img>
                            <footer className="blockquote-footer">
                                {/* Ad Year in Footer */}
                                {this.props.myad.Description}
                            </footer>
                        </blockquote>
                        
                        {/* Button to delete a ad */}
                        <Button variant="danger" onClick={this.DeleteAd}>Delete</Button>

                        {/* Edit button to edit ad */}
                        <Link to={'/edit/'+ this.props.myad._id} className='btn btn-primary'>Update</Link>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}