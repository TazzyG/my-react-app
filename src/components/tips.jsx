import React, { Component } from "react";

class Tips extends Component {
  render() {
    state = {
      tips: getTips()
    };

    return (
      <div>
        {this.state.tips.map(state => (
          <Tip key={tip._id} value={tip.title} />
        ))}
      </div>
    );
  }
}

export default Tips;
