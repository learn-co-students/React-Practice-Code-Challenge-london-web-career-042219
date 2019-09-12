import React, { Component } from "react";

class MoreButton extends Component {
  constructor() {
    super();
    this.state = {
      num1: 4,
      num2: 8
    };
  }
  handleClick = e => {
    e.preventDefault();
    this.setState({
      num1: this.state.num1 + 4,
      num2: this.state.num2 + 4
    });
    this.props.fetchMoreDataFromServer(this.state.num1, this.state.num2);
  };
  render() {
    return <button onClick={this.handleClick}>More sushi!</button>;
  }
}

export default MoreButton;
