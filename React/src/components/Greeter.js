import React, { Component } from 'react';

class Greeter extends Component {
  static defaultProps = {
    text: 'Confirm'
  }

  constructor (props) {
    super(props);
  }


  render() {
    return (
      <button>
        <em>{this.props.text}</em>
      </button>
    );
  }
}

// Greeter.defaultProps = {
//   text: 'confirm'
// }
export default Greeter
