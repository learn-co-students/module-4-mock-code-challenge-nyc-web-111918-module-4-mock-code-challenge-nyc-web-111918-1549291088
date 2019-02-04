import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const formatSushi = () => {
    let rendered = 0
    const maxRendered = 4
    return props.sushis.map(sushi => {
      // if (rendered < maxRendered) {
        return <Sushi key={sushi.id} name={sushi.name} price={sushi.price} img_url={sushi.img_url} />
      //   rendered += 1
      // } else {
      //   return false
      // }
    })
  }

  return (
    <Fragment>
      <div className="belt">
        <MoreButton />
        {formatSushi()}
      </div>
    </Fragment>
  )
}


export default SushiContainer
