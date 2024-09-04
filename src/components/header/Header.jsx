import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={`header container-fluid ${this.props.backgroundColor}`}>
        <p>{this.props.text}</p>
        <button onClick={() => this.props.changeNavColor('colorR')}>Nav Color</button>
        <button onClick={() => this.props.changeArticalColor('colorB')}>Artical Color</button>
        <button onClick={() => this.props.changeFooterColor('colorG')}>Footer Color</button>
        <button onClick={() => this.props.changeAppColor('colorY')}>Change Full Color</button>
      </div>
    );
  }
}

export default Header;
