// Import from React and Axios
import React from 'react';
import axios from 'axios';

// Create Class Component - Inherits from React.Component
export class Edit extends React.Component {

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

    // componentDidMount() - Start
    componentDidMount() {
        // Print out the id of the ad that will be updated
        console.log(this.props.match.params.id);

        // Axios.get from api ads getting by ID
        axios.get('http://localhost:4000/api/ads/' + this.props.match.params.id)
        .then((response) => {
            this.setState({
                Name:response.data.Name,
                Description:response.data.Description,
                Image:response.data.Image,
                _id:response.data._id
            }) // setState - End
        }) // then - End
        .catch((err) => {
            console.log(err);
        }); // catch - End
    } // componentDidMount() - End

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
        // preventDefault
        event.preventDefault();
        // Alert user about their ad successfuly edited
        alert("Ad Edited " + this.state.Name + " " + this.state.Description + " " + this.state.Image);

        // Constant newMovie
        const newAd = {
            Name: this.state.Name,
            Description: this.state.Description,
            Image: this.state.Image
        } // newAd - End

        // Axios Put
        axios.put('http://localhost:4000/api/ads/' + this.state._id, newAd)
        .then((data) => {console.log(data)})
        .catch((err) => {console.log(err)});
    } // handleSubmit() - End

    // onChangeMoviePoster() - Start
    onChangeAdImage(event) {
        this.setState({
            Image: event.target.value
        }) // setState - End
    }  // onChangeMoviePoster() - End

    // Render
    render() {
        return (
            // Create Main Code
            <div>
                <h1>- Edit Ad -</h1>
                {/* Form with handleSubmit */}
                <form onSubmit={this.handleSubmit}>
                    
                    {/* Edit Ad Name */}
                    <div className="form-group">
                        <label>Edit ad name: </label>
                        <input type="text"
                            value={this.state.Name}
                            onChange={this.onChangeAdName}
                            className="form-control"
                        ></input>
                    </div>

                    {/* Edit Ad Description */}
                    <div className="form-group">
                        <label>Edit ad description: </label>
                        <input type="text"
                            value={this.state.Description}
                            onChange={this.onChangeAdDescription}
                            className="form-control"
                        ></input>
                    </div>

                    {/* Edit Ad Image */}
                    <div className="form-group">
                        <label>Edit ad image url: </label>
                        <input type="text"
                            value={this.state.Image}
                            onChange={this.onChangeAdImage}
                            className="form-control"
                        ></input>
                    </div>

                    {/* Submit */}
                    <div>
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
        ); // return - END
    } // render() - END
} // class - END