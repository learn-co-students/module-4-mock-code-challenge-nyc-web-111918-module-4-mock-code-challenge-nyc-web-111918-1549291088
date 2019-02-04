import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
      <Sushi
      sushis={props.sushis}
      page={props.page}
      />
        <MoreButton page={props.page}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
