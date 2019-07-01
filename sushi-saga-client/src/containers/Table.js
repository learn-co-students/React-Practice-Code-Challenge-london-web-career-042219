import React, { Component, Fragment } from "react";

class Table extends Component {
  renderPlates = array => {
    return array.map((x, index) => {
      return (
        <div key={x.id} className="empty-plate" style={{ top: -7 * index }} />
      );
    });
  };

  render() {
    return (
      <Fragment>
        <h1 className="remaining">You have: ${this.props.wallet} remaining!</h1>
        <div className="table">
          <div className="stack">{this.renderPlates(this.props.sushis)}</div>
        </div>
      </Fragment>
    );
  }
}

export default Table;
