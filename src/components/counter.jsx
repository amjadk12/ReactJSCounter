import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  style = {
    fontSize: 20,
    fontWeight: "bold"
  };
  product = {
    id: 1,
    name: "Shoes"
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no element!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  // Former bind event handler way... same can be done using Error function as below
  // constructor() {
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }

  handleIncreament = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create the tag!!"}
        {this.renderTags()}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncreament(this.product)}
          className="btn btn-secondary"
        >
          Increament
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
