import React from 'react'

const MoreButton = (props) => {
  const handleClick = () => {
    console.log('Rendering more sushi');
    
  }
  return <button onClick={handleClick}>
    More sushi!
  </button>
}

export default MoreButton
