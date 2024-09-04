
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  
  render() {
    return (
      <div className={`footer ${this.props.backgroundColor}`}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
export default Footer;
