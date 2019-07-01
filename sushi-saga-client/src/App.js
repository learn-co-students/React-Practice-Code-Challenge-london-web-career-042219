import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import WalletRefill from "./components/WalletRefill";

// Endpoint!
const API = "http://localhost:4000/sushis";

class App extends Component {
  state = {
    sushis: [],
    wallet: 100
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(this.addSushiToState);
  }

  addSushiToState = dbSushis => {
    const eaten = { eaten: false };
    this.setState({
      sushis: dbSushis.map(dbSushi => Object.assign(dbSushi, eaten))
    });
  };

  eatSushi = id => {
    const index = this.state.sushis.findIndex(sushi => sushi.id === id);
    const altSushi = this.state.sushis[index];

    if (this.state.wallet >= altSushi.price && altSushi.eaten === false) {
      const sushisRefresh = this.state.sushis;
      sushisRefresh[index].eaten = true;

      this.setState({ sushis: sushisRefresh, wallet: newWallet });
    }
  };

  refillToggle = () => {
    this.setState({ showRefill: !this.state.showRefill });
  };

  updateWallet = amount => {
    this.setState({ wallet: this.state.wallet + amount });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi} />
        <Table
          sushis={this.state.sushis.filter(sushi => sushi.eaten)}
          wallet={this.state.wallet}
          updateWallet={this.updateWallet}
        />
        <WalletRefill updateWallet={this.updateWallet} />
      </div>
    );
  }
}

export default App;
