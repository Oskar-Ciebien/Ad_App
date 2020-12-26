// Imports from React and App.css
import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel'

    // Content Class Component - Inherits from React.Component
    export class Content extends React.Component {

        // Render
        render() {
            // CSS Styles
            // carouselHeading
            const carouselHeading = {
                color: "black",
                fontFamily: "Times New Roman",
                fontWeight: "bold"
            } // carouselHeading - End

            // carouselText
            const carouselText = {
                color: "white",
                fontFamily: "Times New Roman",
                fontSize: "35px"
            } // carouselText - End

            // carouselBorder
            const carouselBorder = {
                border: "5px solid white",
                backgroundColor: "rgba(213, 204, 204, 0.9)"
            } // carouselBorder - End

            // Return
            return (
                <div className="App">
                    <br></br>
                    {/* Start of Carousel */}
                    <Carousel>
                        {/* Slide 1 */}
                        <Carousel.Item>
                            <img
                                height="835px"
                                className="d-block w-100"
                                src="https://cdn-cyclingtips.pressidium.com/wp-content/uploads/2020/04/potwnnfe1cupbyvju75f.jpeg"
                                alt="Bike for sale - First Slide"
                            />
                            <Carousel.Caption style={carouselBorder}>
                                {/* Slide Heading */}
                                <h1 style={carouselHeading}>Bikes</h1>
                                {/* Slide Description */}
                                <p style={carouselText}>Sell or buy a bike.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        {/* Slide 2 */}
                        <Carousel.Item>
                            <img
                                height="835px"
                                className="d-block w-100"
                                src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2019/01/surface-laptop-movies-desk.jpg"
                                alt="Computers for sale - Second Slide"
                            />
                            <Carousel.Caption style={carouselBorder}>
                                {/* Slide Heading */}
                                <h1 style={carouselHeading}>Computers</h1>
                                {/* Slide Description */}
                                <p style={carouselText}>Sell, buy or advertise repairs of computers.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        {/* Slide 3 */}
                        <Carousel.Item>
                            <img
                                height="835px"
                                className="d-block w-100"
                                src="https://www.outdoor.ie/wp-content/uploads/2019/03/20190307_144404.jpg"
                                alt="Furniture for sale - Third Slide"
                            />
                            <Carousel.Caption style={carouselBorder}>
                                {/* Slide Heading */}
                                <h1 style={carouselHeading}>Furniture</h1>
                                {/* Slide Description */}
                                <p style={carouselText}>Sell or buy furniture.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            ); // Return end
        } // Render End
} // Class End