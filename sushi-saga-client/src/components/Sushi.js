import React, { Fragment } from "react";

class Sushi extends React.Component {
  constructor(props) {
    super(props);
    if (props.eatenSushi.includes(props.sushi.id)) {
      this.state = {
        eaten: true
      };
    } else {
      this.state = {
        eaten: false
      };
    }
  }

  setSushiToEaten = () => {
    if (this.state.eaten) {
      alert("You've already eaten this sushi");
    } else if (this.props.money < this.props.sushi.price) {
      alert("You don't have enough money");
    } else {
      this.props.eatSushi(this.props.sushi);
      this.setState({ eaten: true });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.sushi.id !== this.props.sushi.id) {
      this.setState({ eaten: false });
    }
  }

  render() {
    const { id, name, img_url, price } = this.props.sushi;

    return (
      <div className="sushi">
        <div className="plate" onClick={this.setSushiToEaten}>
          {this.state.eaten ? null : <img src={img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
