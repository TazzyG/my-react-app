import React, { Component } from "react";
import { getTopics } from "../services/fakeTopicService";
class Topics extends Component {
  state = {
    topics: getTopics()
  };

  handleSelect = topic => {
    console.log(topic);
  };
  render() {
    const { length: count } = this.state.topics;
    if (count === 0) return <p>I'm still working on some Topics</p>;
    return (
      <React.Fragment>
        <div class="carousel slide text-light" data-ride="carousel">
          <p> So far {count} topics </p>
          {this.state.topics.map(topic => (
            <i key={topic._id} class={"fa-${topic.icon}"}>
              <span onClick={() => this.handleSelect(topic)}>{topic.name}</span>
            </i>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Topics;
