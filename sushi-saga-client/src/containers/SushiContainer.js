import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
    const sortSushi = props.sushis.map((sushi, i) => {
      return sushi.key = i
  return (

    <Fragment>

        {sortSush}



        <MoreButton />
      </div>
    </Fragment>
  )
})
}

export default SushiContainer
