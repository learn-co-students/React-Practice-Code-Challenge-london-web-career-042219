import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

const  API = "http://localhost:4000/sushis"

class App extends Component {
  state = {
    sushis: [],
    money: 100,
    eatenSushi: []
  };

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({ sushis: data }));
    }

    eatSushi = (sushi) => {
      this.setState({...this.state, money: this.state.money - sushi.price, eatenSushi: [...this.state.eatenSushi, sushi.id] })
    }

  render() {
    return (
      <div className="app">
        <SushiContainer money={this.state.money} sushis={this.state.sushis} eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi} />
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
