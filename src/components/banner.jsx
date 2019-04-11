import React, { Component } from "react";
// import sand from "../banner/sand.jpg";
import sand_video from "../banner/sand_video.mp4";
import "../App.css";
import "./video.jsx";

class Banner extends Component {
  render() {
    return (
      <div class="homepage-hero-module">
        <div class="video-container">
          <div class="filter" />
          <video
            autoPlay="autoplay"
            loop="loop"
            muted="muted"
            playsInline="playsinline"
          >
            <source src={sand_video} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default Banner;
