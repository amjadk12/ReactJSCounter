import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { totalCounters } = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </nav>
    );
  }
}

export default NavBar;
