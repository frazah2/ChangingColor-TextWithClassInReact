import React, { Component } from 'react';
import './Ads.css';

class Ads extends Component {
  
  render() {
    return (
      <div className={`ads ${this.props.backgroundColor}`}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
export default Ads;
