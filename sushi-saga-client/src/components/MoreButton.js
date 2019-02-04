import React from 'react'




const MoreButton = (props) => {

  const handleClick = event => {
    const newValue = props.pageCount + 1
    props.moreSushiButton(newValue)
  }

    return <button onClick={handleClick}>More sushi!</button>
}

export default MoreButton
