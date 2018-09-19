import React, { Component } from "react";

class Counter extends Component {
  style = {
    fontSize: 20,
    fontWeight: "bold"
  };
  product = {
    id: this.props.id,
    value: this.props.value
  };

  render() {
    console.log(this.props.id);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn m-2 btn-secondary"
        >
          Increament
        </button>
        <button
          className="btn-danger btn-sm m2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
