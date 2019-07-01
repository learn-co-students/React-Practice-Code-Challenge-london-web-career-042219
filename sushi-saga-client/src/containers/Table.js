import React, { Component } from "react";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      eaten: false
    };
  }

  renderPlates = array => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };

  render() {
    return (
      <div>
        <h1 className="remaining">
          You have: ${this.props.moneyRemaining} remaining!
        </h1>
        <div className="table">
          <div className="stack">{this.renderPlates(this.props.eatenArr)}</div>
        </div>
      </div>
    );
  }
}

export default Table;
