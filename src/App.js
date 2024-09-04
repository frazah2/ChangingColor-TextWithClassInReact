import React, { Component } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Artical from './components/artical/Artical';
import Ads from './components/ads/Ads';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerColor: 'defaultColor',
      navColor: 'defaultColor',
      articalColor: 'defaultColor',
      appColor: 'defaultColor',
      headerColor: 'defaultColor',
      adsColor: 'defaultColor',
      footerText: 'Footer',
      navText: 'Nav',
      articalText: 'Artical',
      headerText: 'Header',
      adsText: 'Side',
    };
  }

  changeFooterColor = (color) => {
    this.setState({ footerColor: color,
      footerText: 'GreenFooter',
    });
  };

  changeNavColor = (color) => {
    this.setState({ 
      navColor: color,
      navText: 'RedNav',
     });
  };

  changeArticalColor = (color) => {
    this.setState({ articalColor: color,
      articalText: 'Purple? Artical',
     });
  };
  changeHeaderColor = (color) => {
    this.setState({ headerColor: color });
  };

  changeAdsColor = (color) => {
    this.setState({ adsColor: color });
  };


  changeAppColor = (color, newText) => {
    console.log('Changing app color to:', color, newText);
    this.setState({ 
      appColor: color,
      footerColor: color,
      navColor: color,
      articalColor: color,
      headerColor: color,
      adsColor: color,
      footerText: 'OrangeFooter',
      navText: 'OrangeNav',
      articalText: 'OrangeArtical',
      headerText: 'OrangeHeader',
      adsText: 'OrangeSide',
     });
  };

  render() {
    return (
      <div className={`App ${this.state.appColor}`}>
        <Header  text={this.state.headerText}
          backgroundColor={this.state.headerColor}
          changeFooterColor={this.changeFooterColor}
          changeNavColor={this.changeNavColor}
          changeArticalColor={this.changeArticalColor}
          changeHeaderColor={this.changeHeaderColor}
          changeAdsColor={this.changeAdsColor}
          changeAppColor={this.changeAppColor}
        />
        <Nav backgroundColor={this.state.navColor}  text={this.state.navText}/>
        <Artical backgroundColor={this.state.articalColor}  text={this.state.articalText}/>
        <Ads backgroundColor={this.state.adsColor} text={this.state.adsText}/>
        <Footer backgroundColor={this.state.footerColor}  text={this.state.footerText}/>
      </div>
    );
  }
}

export default App;
