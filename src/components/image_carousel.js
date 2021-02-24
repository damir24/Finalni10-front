import React from "react";
import "../styles/home_images.css";

let imagesCollection = [
    ["image_0", "Triangle"],
    ["image_1", "Romb"],
    ["image_2", "Pentagon"],
    ["image_3", "Hexagon"],
    ["image_4", "Circle"]
];

export default function Images() {
    let arr = [];
    imagesCollection.map((image) => {
        let imgPath = `./images/${image[0]}.png`;
        arr.push(
            <div className="container">
                <img src={imgPath} alt={image[1]} key={image} style={{ width: "100%" }} />
                <div className="text-block">
                    <h3>Naziv proizvoda</h3>
                    <h4>Cijena</h4>
                    <p>{image[0]}</p>
                </div>
            </div>
        )
    })
    return (
        arr
    )
}