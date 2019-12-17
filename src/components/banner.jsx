import React, { Component } from "react";
import sand_video from "../banner/sand_video.mp4";
import "../App.css";
import "./video.jsx";
import Topics from "./topics.jsx";

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="overlay" />
          <video
            className="video-background"
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
            controls={true}
          >
            <source src={sand_video} type="video/mp4" />
          </video>
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3">Haathi Consulting</h1>
                <p className="lead mb-0">
                  Growing Businesses One Step at a Time
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <p>
                  After hiding away, learning full stack web development, I
                  decided to start a brand based on learning while building. I
                  will post articles and tips and things I have learned in my
                  career that help build a business thrive online. I have
                  learned as a consultant, turned full stack web developer
                  through many ups and downs that taking one step at a time can
                  make a difference. I hope sharing my experiences can help make
                  a difference to my friends who are following the same path.
                </p>
                <p>
                  I have always been bewildered by the fact that developers
                  can't find good projects and enterpreneurs and idea makers
                  can't find good developers.
                </p>
                <p>
                  I hope to share insights and offer some help to bridge that
                  gap. As a project manager turned developer, it makes sense for
                  developers to make use of sound business logic and for
                  business people to understand what goes into web or
                  application development.
                </p>
                <p className="mb-0">
                  I love the open source community which is why this site is
                  hosted on <a href="https://github.com/">github</a>. Follow
                  along with me while I make updates. So far there are{" "}
                  {this.formatCount()} articles created.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h1> Topics Test </h1>
                <Topics />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Banner;
