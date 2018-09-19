import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
      </nav>
    );
  }
}

export default NavBar;
