import React from 'react';
import { Component } from "react";
import './Artical.css';

class Artical extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      text: "Submit",

    }
  }


  add_plus = () => {
    this.setState(
      (prev) => (
        {
          number: prev.number + 1,
          text: "Plus",

        }
      )
    )
  }


  remove_minus = () => {
    this.setState(
      (prev) => (
        {
          number: prev.number - 1,
          text: "Minus",

        }
      )
    )
  }




  render() {

    const { number, text, } = this.state

    return (
      <div className={`artical container-fluid ${this.props.backgroundColor}`}>
        <div className="row">
          <div>
            <p>{this.props.text}</p>
          </div>
          <div className="counting">
            <h3>{number}</h3>
            <h3>{text}</h3>

            <button onClick={this.add_plus} class="me-2">Plus </button>

            <button onClick={this.remove_minus}>Minus</button>
          </div>
        </div>

      </div>
    )
  }






}



export default Artical;
