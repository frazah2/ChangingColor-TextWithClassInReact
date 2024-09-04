import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  
  render() {
    return (
      <div className={`nav col-2 ${this.props.backgroundColor}`}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Nav;
