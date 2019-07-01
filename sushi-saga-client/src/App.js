import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { currentPosition:0,
                  qtySushi:4,
                  sushis: [],
                  eatenSushis:[],
                  cash:100
                };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          sushis: data.map( sushi => Object.assign(sushi, {eaten:false}) )
        })
      })
  }
// Use Object.assign(sushi, {key:value}) map over sushis
//newarray =
 rollOnSushis = () => {
   let newPosition=0;
   if (this.state.sushis.length>this.state.currentPosition+this.state.qtySushi) {
    newPosition=this.state.currentPosition + this.state.qtySushi;
   }
   this.setState( {currentPosition:newPosition }  );
  }

  eatSushi = (id) => {

    let eatenSushiCopy=[...this.state.eatenSushis];
    let sushiCopy=[...this.state.sushis]
    const sushiIndex = sushiCopy.findIndex(sushi => sushi.id === id);    

    if (this.state.cash >= sushiCopy[sushiIndex].price &&
          !sushiCopy[sushiIndex].eaten ) {
      let cash = this.state.cash - sushiCopy[sushiIndex].price;
      sushiCopy[sushiIndex].eaten=true;
      eatenSushiCopy.push(sushiCopy[sushiIndex]);
      this.setState({ eatenSushis:eatenSushiCopy,
                      sushis:sushiCopy,
                      cash:cash});
      }
  }

  tenDollarMore = () => {
    let newCash=this.state.cash+10;
    this.setState( {cash: newCash });
  }

  render() {

    let slicePos=this.state.currentPosition+this.state.qtySushi;

    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice( this.state.currentPosition, slicePos) } rollOnSushis={this.rollOnSushis} eatSushi={this.eatSushi}/>
        <Table cash={this.state.cash} eatenSushis={this.state.eatenSushis} tenDollarMore={this.tenDollarMore}/>
      </div>
    );
  }
}

export default App;
