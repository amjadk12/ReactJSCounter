import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };
  style = {
    fontSize: 20,
    fontWeight: "bold"
  };
  product = {
    id: this.props.id,
    value: this.props.value
  };

  handleIncreament = product => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncreament(this.product)}
          className="btn m-2 btn-secondary"
        >
          Increament
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
