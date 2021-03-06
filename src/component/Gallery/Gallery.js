import React from "react";
import "./Gallery.css";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";
import image4 from "../../images/4.png";
import image5 from "../../images/5.png";
import image6 from "../../images/6.png";
import image7 from "../../images/7.png";
import image8 from "../../images/8.png";
import image9 from "../../images/9.png";
import image10 from "../../images/10.png";
import insta from "../../images/insta-like.png";

function Gallery() {
  return (
    <div className="component-block" id="gallery">
      <h1 className="title-block">GALLERY</h1>
      <div className="content-wrapper">
        <div className="gallery-text">
          Visit Us on Instagram
          <img className="insta-like" src={insta} alt="insta" />
        </div>
        <div className="gallery-container">
          <img className="item" src={image1} />

          <img className="item" src={image2} />
          <img className="item-large" src={image5} />

          <div className="break" />

          <img className="item-large" src={image3} />

          <img className="item" src={image8} />

          <img className="item" src={image6} />

          <img className="item" src={image7} />

          <img className="item-large" src={image9} />
          <div className="break" />
          <img className="item" src={image10} />
          <img className="item-large" src={image4} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
