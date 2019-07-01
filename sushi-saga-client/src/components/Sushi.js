import React, { Component } from "react";

class Sushi extends Component {
  state = {
    eaten: false
  };

  handleClick = () => {
    this.setState({
      eaten: true
    });
    this.props.eatSushi(this.props.sushi);
  };

  // componentDidUpdate() {
  //   this.props.eatSushi(this.props.sushi);
  // }

  render() {
    return (
      <div
        className="sushi"
        onClick={this.handleClick}

        // onClick={() => this.props.eatSushi(this.props.sushi)}
      >
        <div className="plate">
          {this.state.eaten ? null : (
            <img
              src={this.props.sushi.img_url}
              alt={this.props.sushi.name}
              width="100%"
            />
          )}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;

// import React, { Fragment } from "react";

// const Sushi = props => {
//   return (

//   );
// };

// export default Sushi;
