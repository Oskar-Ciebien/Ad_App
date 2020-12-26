// Imports
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
        } // state - End
    } // Constructor - End

    // onChangeAdDescription() - Start
    onChangeAdDescription(event) {
        this.setState({
            Description: event.target.value
        }) // setState - End
    } // onChangeAdDescription() - End

    // onChangeAdName() - Start
    onChangeAdName(event) {
        this.setState({
            Name: event.target.value
        }) // setState - End
    } // onChangeAdName() - End

    // handleSubmit() - Start
    handleSubmit(event) {
        // preventDeafault
        event.preventDefault();
        // Alert user that ad has been added succesfully
        alert(this.state.Name + " has been added to the list.");

        // Constant newAd
        const newAd = {
            Name: this.state.Name,
            Description: this.state.Description,
            Image: this.state.Image
        } // newAd - End

        // Axios Post
        axios.post('http://localhost:4000/api/ads', newAd)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    } // handleSubmit() - End

    // onChangeAdImage() - Start
    onChangeAdImage(event) {
        this.setState({
            Image: event.target.value
        }) // setState - End
    }  // onChangeAdImage() - End

    // Render
    render() {
        // CSS Styles
        // title
        const title = {
            color: "black",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
            fontSize: "23px"
        } // title - End

        // submit
        const submit = {
            color: "white",
            fontFamily: "Times New Roman",
            fontSize: "20px"
        } // submit - End

        // descriptionBox
        const descriptionBox = {
            maxHeight: "300px",
            minHeight: "100px",
            height: "100px"
        } // descriptionBox - End

        // Return
        return (
            // Create Main Code
            <div>
                <br></br>
                {/* Form with handleSubmit */}
                <form onSubmit={this.handleSubmit}>

                    {/* Add Ad Name */}
                    <div style={title} className="form-group">
                        <label>- Name of your ad -</label>
                        <input type="text"
                            placeholder="Short name for your ad..."
                            value={this.state.Name}
                            onChange={this.onChangeAdName}
                            className="form-control"
                        ></input>
                    </div>

                    {/* Add Ad Description */}
                    <div style={title} className="form-group">
                        <label>- Description of your ad -</label>
                        <textarea placeholder="Your description..."
                            style={descriptionBox}
                            value={this.state.Description}
                            onChange={this.onChangeAdDescription}
                            className="form-control"
                        ></textarea>
                    </div>

                    {/* Add Ad Image */}
                    <div style={title} className="form-group">
                        <label>- Image URL for your ad -</label>
                        <input type="text"
                            placeholder="Image URL..."
                            value={this.state.Image}
                            onChange={this.onChangeAdImage}
                            className="form-control"
                        ></input>
                    </div>
                    <br></br>
                    {/* Submit */}
                    <div style={submit}>
                        <hr></hr>
                        <input type="submit" value="Publish Ad"></input>
                        <hr></hr>
                    </div>
                </form>
            </div>
        ); // Return END
    } // Render END
} // Class END