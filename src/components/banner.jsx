import React, { Component } from "react";
// import sand from "../banner/sand.jpg";
import sand_video from "../banner/sand_video.mp4";
import "../App.css";
import "./video.jsx";

class Banner extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="overlay" />
          <video
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
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
                  decided to start a brand new site. I will post articles and
                  tips and things I have learned in my career that help build a
                  business thrive online. I have learned As a consultant, turned
                  full stack web developer, I experienced many ups and downs
                  that I hope can help make a difference to my friends who are
                  following the same path.
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
        <section className="pictures">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className="zoom img-fluid"
                rel="ligthbox"
              >
                <img
                  src="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="zoom img-fluid "
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className="zoom img-fluid"
                rel="ligthbox"
              >
                <img
                  src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="zoom img-fluid"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="zoom img-fluid"
                rel="ligthbox"
              >
                <img
                  src="https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="zoom img-fluid "
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="zoom img-fluid"
                rel="ligthbox"
              >
                <img
                  src="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="zoom img-fluid "
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://images.pexels.com/photos/1038914/pexels-photo-1038914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className="zoom img-fluid"
                rel="ligthbox"
              >
                <img
                  src="https://images.pexels.com/photos/1038914/pexels-photo-1038914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="zoom img-fluid "
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className="zoom img-fluid"
                rel="ligthbox"
              >
                <img
                  src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="zoom img-fluid "
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://images.pexels.com/photos/56005/fiji-beach-sand-palm-trees-56005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="fancybox"
                rel="ligthbox"
              >
                <img
                  src="https://images.pexels.com/photos/56005/fiji-beach-sand-palm-trees-56005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="zoom img-fluid "
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                href="https://images.pexels.com/photos/1038002/pexels-photo-1038002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                class="fancybox"
                rel="ligthbox"
              >
                <img
                  src="https://images.pexels.com/photos/1038002/pexels-photo-1038002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  class="zoom img-fluid "
                  alt=""
                />
              </a>
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
