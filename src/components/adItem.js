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
                    {/* Card Header with Ad Title */}
                    <Card.Header>{this.props.myad.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* Image of the Ad Poster */}
                            <img src={this.props.myad.Poster} width="200" height="200" alt="Poster"></img>
                            <footer className="blockquote-footer">
                                {/* Ad Year in Footer */}
                                {this.props.myad.Year}
                            </footer>
                        </blockquote>
                        
                        {/* Button to delete a ad */}
                        <Button variant="danger" onClick={this.Deletead}>Delete</Button>

                        {/* Edit button to edit ad */}
                        <Link to={'/edit/'+ this.props.myad._id} className='btn btn-primary'>Update</Link>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}