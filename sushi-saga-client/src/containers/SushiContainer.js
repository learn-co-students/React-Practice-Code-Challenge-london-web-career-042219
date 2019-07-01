import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends React.Component {
  state = {
    displayIndex: 0,
  }

  renderMore = (event) => {
    event.persist()
    if (this.state.displayIndex === 96) {
      this.setState({ displayIndex: 0})
    } else {
      this.setState({ displayIndex: this.state.displayIndex + 4 })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
        {
          this.props.sushis
          .slice(this.state.displayIndex, this.state.displayIndex + 4)
          .map((sushi, idx) => <Sushi key={idx} sushi={sushi} money={this.props.money} eatSushi={this.props.eatSushi} eatenSushi={this.props.eatenSushi}/>
          )
        }
          <MoreButton renderMore={this.renderMore} />
        </div>
      </Fragment>
    )
  }

}

export default SushiContainer