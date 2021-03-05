import React, { Component } from 'react';
import ImageCarousel from './components/image_carousel.js';
import PopularItems from "./components/popularItems.js";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <ImageCarousel />
                <PopularItems />
                <footer>
                    <h3 className="container">Some text!</h3>
                    <p>some long text some long text some long text ...</p>
                </footer>
            </div>
        )
    }
}

export default Home;