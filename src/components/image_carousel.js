import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/slick/slick.css";
import "../styles/slick/slick-theme.css";

let imagesCollection = [
  ["image_0", "Triangle"],
  ["image_1", "Romb"],
  ["image_2", "Pentagon"],
  ["image_3", "Hexagon"],
  ["image_4", "Circle"]
];






export default class ImageCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 2000,
      pauseOnHower: true
    };
    let arr = [];
    imagesCollection.map((image) => {
      let imgPath = `./images/${image[0]}.png`;
      arr.push(
        <div key={image}>
          <img src={imgPath} alt={image[1]} key={image} style={{ width: "100%" }} />
        </div>
      )
    })

    return (
      <div className="container pt-3">
        <h2>Nedavno</h2>
        <Slider {...settings} className="col-sm-5">
          {arr}
        </Slider>
      </div>
    );
  }
}
