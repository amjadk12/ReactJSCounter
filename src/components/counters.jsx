import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 7 },
      { id: 5, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}
export default Counters;