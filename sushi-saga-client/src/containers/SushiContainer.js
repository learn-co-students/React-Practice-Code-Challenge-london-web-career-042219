import React, { Component } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends Component {
  renderSushi = () => {
    return this.props.sushi.map(item => (
      <Sushi
        moneyRemaining={this.props.moneyRemaining}
        eatenSushi={this.props.eatenSushi}
        sushi={item}
        key={item.id}
        eaten={this.props.eaten}
      />
    ));
  };

  render() {
    return (
      <div>
        <div className="belt">
          {this.renderSushi()}
          <MoreButton
            fetchMoreDataFromServer={this.props.fetchMoreDataFromServer}
          />
        </div>
      </div>
    );
  }
}

export default SushiContainer;
