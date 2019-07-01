import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushi: [],
      eaten: false,
      eatenArr: [],
      money: 100,
      total: [],
      moneyRemaining: 0
    };
  }
  componentDidMount() {
    this.fetchMoreDataFromServer(0, 4);
  }

  fetchDataFromServer = () => {
    return fetch(API).then(response => response.json());
  };

  fetchMoreDataFromServer = (num1, num2) => {
    return this.fetchDataFromServer().then(data =>
      this.setState({ sushi: data.slice(num1, num2) })
    );
  };

  eatenSushi = sushi => {
    this.setState({
      total: [...this.state.total, sushi.price]
    });
    let array = this.state.sushi.filter(item => item.id !== sushi.id);
    this.setState({
      sushi: array
    });

    this.setState({
      eatenArr: [...this.state.eatenArr, sushi]
    });
  };

  updateTotal = () => {
    let total = this.state.total.reduce((a, b) => a + b, 0);
    this.setState({
      moneyRemaining: this.state.money - total
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          moneyRemaining={this.state.moneyRemaining}
          eatenSushi={this.eatenSushi}
          fetchMoreDataFromServer={this.fetchMoreDataFromServer}
          sushi={this.state.sushi}
          eaten={this.state.eaten}
        />
        <Table
          moneyRemaining={this.state.moneyRemaining}
          updateTotal={this.updateTotal}
          eatenArr={this.state.eatenArr}
        />
      </div>
    );
  }
}

export default App;
