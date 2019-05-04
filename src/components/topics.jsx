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
        <table className="table">
          <thead>
            <tr>
              <th> Topic </th>
              <th> Tips </th>
              <th> New </th>
              <th> Articles </th>
            </tr>
          </thead>
          <tbody>
            {this.state.topics.map(topic => (
              <tr key={topic._id}>
                <td onClick={() => this.handleSelect(topic)}>{topic.name}</td>
                <td />
                <td />
                <td />
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Topics;
