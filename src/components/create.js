// Import from React and Axios
import React from 'react';
import axios from 'axios';

// Create Class Component - Inherits from React.Component
export class Create extends React.Component {

    // Constructor - Start
    constructor() {
        super();

        // Methods
        this.onChangeAdDescription = this.onChangeAdDescription.bind(this);
        this.onChangeAdName = this.onChangeAdName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeAdImage = this.onChangeAdImage.bind(this);

        // State
        this.state = {
            Name: '',
            Description: '',
            Image: '',
        }

    } // Constructor - End

    // onChangeAdDescription() - Start
    onChangeAdDescription(event) {
        this.setState({
            Description: event.target.value
        })
    } // onChangeAdDescription() - End

    // onChangeAdName() - Start
    onChangeAdName(event) {
        this.setState({
            Name: event.target.value
        })
    } // onChangeAdName() - End

    // handleSubmit() - Start
    handleSubmit(event) {
        event.preventDefault();
        alert("Ad Added " + this.state.Name + " " + this.state.Description + " " + this.state.Image);

        // Constant newAd
        const newAd = {
            Name: this.state.Name,
            Description: this.state.Description,
            Image: this.state.Image
        }

        // Axios Post
        axios.post('http://localhost:4000/api/ads', newAd)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    } // handleSubmit() - End

    // onChangeAdImage() - Start
    onChangeAdImage(event) {
        this.setState({
            Image: event.target.value
        })
    }  // onChangeAdImage() - End

    render() {
        return (
            // Create Main Code
            <div>
                <h1>This is the Create Component.</h1>

                {/* Form with handleSubmit */}
                <form onSubmit={this.handleSubmit}>
                    {/* Add Ad Name */}
                    <div className="form-group">
                        <label>Add ad name: </label>
                        <input type="text"
                            value={this.state.Name}
                            onChange={this.onChangeAdName}
                            className="form-control"
                        ></input>
                    </div>

                    {/* Add Ad Description */}
                    <div className="form-group">
                        <label>Add ad description: </label>
                        <input type="text"
                            value={this.state.Description}
                            onChange={this.onChangeAdDescription}
                            className="form-control"
                        ></input>
                    </div>

                    {/* Add Ad Image */}
                    <div className="form-group">
                        <label>Add ad image url: </label>
                        <input type="text"
                            value={this.state.Image}
                            onChange={this.onChangeAdImage}
                            className="form-control"
                        ></input>
                    </div>

                    {/* Submit */}
                    <div>
                        <input
                            type="submit"></input>
                    </div>
                </form>
            </div>
        );
    }
}