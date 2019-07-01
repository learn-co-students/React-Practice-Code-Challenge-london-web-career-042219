import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    sushiEaten: [],
    budget: 100
  };

  moreSushi = e => {
    this.setState({ sushis: this.state.sushis.slice(4) });
  };

  eatSushi = sushi => {
    let moneyLeft = this.state.budget - sushi.price;
    if (moneyLeft >= 0) {
      this.state.sushiEaten.push(sushi);
      this.setState({
        budget: this.state.budget - sushi.price
      });
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiEaten={this.state.sushiEaten}
          sushis={this.state.sushis}
          eatSushi={this.eatSushi}
          moreSushi={this.moreSushi}
        />
        <Table sushiEaten={this.state.sushiEaten} budget={this.state.budget} />
      </div>
    );
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          sushis: data
        });
      });
  }
}

export default App;
