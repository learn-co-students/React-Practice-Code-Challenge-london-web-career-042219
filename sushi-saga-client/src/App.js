import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import getSushis from '../src/Api'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    quantity: 4,
    wallet : 100,
    table: []
  }

  getSushisApi = () => {

    const {quantity} = this.state
    
    getSushis() 
    .then(sushis => this.setState({sushis: sushis.slice(quantity-4, quantity)}))
    
  }

  increaseQuantity = () => {
    
    const {quantity} = this.state

    const updatedQuantity = quantity + 4

    if (quantity < 101){ 

      this.setState({quantity: updatedQuantity})

    }else {

      this.setState({quantity: 4})

    }

    this.getSushisApi()
  
  }
  

  componentDidMount(){
  
  this.getSushisApi()

  } 

  buySushi = (sushi) => {

  const {sushis, table, wallet} = this.state

  const myTabe = table.slice()

  const mySushi = sushis.filter( x => x.id === sushi.id)[0]

  myTabe.push(mySushi)

  if( (wallet - sushi.price ) >= 0){

    this.setState({table: myTabe})

    const walletUpdate = wallet - sushi.price
  
    this.setState({wallet: walletUpdate})

  }else{

    alert("You have no more money left.")
  }
    

  }

  render() {

    const {sushis, wallet, table} = this.state

    return (
      <div className="app">
        <SushiContainer buySushi={this.buySushi} sushis={sushis} increaseQuantity={this.increaseQuantity}/>
        <Table wallet={wallet} table={table} />
      </div>
    );
  }
}

export default App;