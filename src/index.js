//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      {" "}
      Let's check this out{" "}
    </h1>
    <div>
      <img
        src="https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/4x3/4x3-veg-schezwan-noodles-recipe-video-how-to-make-easy-veg-schezwan-noodles.jpg"
        alt="image1"
      />
      <img
        src="https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg"
        alt="image2"
      />
      ;
    </div>
  </div>,
  document.getElementById("root")
);

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
