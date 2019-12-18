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
        <p> So far {count} topics </p>
        {this.state.topics.map(topic => (
          <div key={topic._id}>
            <span onClick={() => this.handleSelect(topic)}>{topic.name}</span>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Topics;
