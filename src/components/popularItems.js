import React, { Component } from 'react';

class PopularItems extends Component {
    render() {

        let imagesCollection = [
            ["image_0", "Triangle"],
            ["image_1", "Romb"],
            ["image_2", "Pentagon"],
            ["image_3", "Hexagon"],
            ["image_4", "Circle"]
        ];

        let arr = [];
        imagesCollection.map((image) => {
            let imgPath = `./images/${image[0]}.png`;
            arr.push(
                <img src={imgPath} alt={image[1]} key={image} className="col-sm-3 pt-2" />
            )
        })
        return (
            <div className="container row pt-5">
                <h2>Popularno</h2>
                {arr}
            </div>
        )
    }
}

export default PopularItems;