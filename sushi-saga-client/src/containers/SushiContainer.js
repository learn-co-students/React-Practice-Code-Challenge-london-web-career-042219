import React, { Component, Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends Component {
  state = {
    displayIndex: 0
  };

  moreSushi = () => {
    if (this.state.displayIndex < this.props.sushis.length - 4) {
      this.setState({ displayIndex: this.state.displayIndex + 4 });
    } else {
      this.setState({ displayIndex: 0 });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.props.sushis
            .slice(this.state.displayIndex, this.state.displayIndex + 4)
            .map(sushi => (
              <Sushi
                key={sushi.id}
                sushi={sushi}
                eatSushi={this.props.eatSushi}
              />
            ))}
          <MoreButton moreSushi={this.moreSushi} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;
