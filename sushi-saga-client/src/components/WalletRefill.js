import React, { Component } from "react";

export default class WalletRefill extends Component {
  state = { showRefill: false };

  handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const amount = parseInt(event.target[0].value, 10);
    event.target[0].value = "";
    this.props.updateWallet(amount);
  };

  renderForm = () => {
    if (this.state.showRefill) {
      return (
        <form onSubmit={this.handleSubmit}>
          Top up amount:
          <input type="text" name="topup" />
          <input type="submit" />
        </form>
      );
    }
  };

  render() {
    return (
      <div className="wallet-refill">
        <button
          onClick={() => this.setState({ showRefill: !this.state.showRefill })}
        >
          Refill Wallet
        </button>
        {this.renderForm()}
      </div>
    );
  }
}
