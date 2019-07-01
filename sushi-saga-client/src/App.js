import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
// const API = `http://localhost:3000/sushis?_limit=4&_page=${pageNumber}`;

class App extends Component {
  state = {
    sushis: [],
    pageNumber: 1,
    wallet: 100,
    eatenSushis: []
  };

  eatSushi = sushi => {
    if (this.state.eatenSushis.includes(sushi)) return;

    this.setState({
      eatenSushis: [...this.state.eatenSushis, sushi],
      wallet: this.state.wallet - sushi.price
    });
  };

  componentDidMount() {
    this.fetchSushis();
  }

  fetchSushis = () => {
    console.log("fetch run");
    fetch(
      `http://localhost:3000/sushis?_limit=4&_page=${this.state.pageNumber}`
    )
      .then(response => response.json())
      .then(data => this.setState({ sushis: data }));
  };

  handlePage = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    });
    this.fetchSushis();
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          handlePage={this.handlePage}
          eatSushi={this.eatSushi}
        />
        <Table
          wallet={this.state.wallet}
          eatenSushis={this.state.eatenSushis}
        />
      </div>
    );
  }
}

export default App;
