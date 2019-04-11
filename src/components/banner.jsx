import React, { Component } from "react";
import sand from "../banner/sand.jpg";
import sand_video from "../banner/sand_video.mp4";
import "../App.css";
import "./video.jsx";

class Banner extends Component {
  render() {
    return (
      <div className="homepage-hero-module">
        <div className="video-container">
          <div className="filter" />
          <video src={sand_video} autoPlay loop muted />
          <div className="poster hidden">
            <img src={sand} alt="walk in sand" />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
