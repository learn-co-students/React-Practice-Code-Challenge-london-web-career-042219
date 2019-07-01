import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = ({sushis, increaseQuantity, buySushi}) => {
  
  
  return (
    <Fragment>
      <div className="belt">
        {
         sushis.map ( sushi => <Sushi key={sushi.id} sushi={sushi} handleClick={()=> buySushi(sushi)}/>)
        }
        <MoreButton  handleClick={increaseQuantity}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer