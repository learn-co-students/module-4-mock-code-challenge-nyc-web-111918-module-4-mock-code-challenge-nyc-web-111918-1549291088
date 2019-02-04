import React, { Fragment } from 'react'


const Sushi = ({sushiData, handleOnEatenSushiClick, balance }) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={balance >= sushiData.price ? () => handleOnEatenSushiClick(sushiData.id) : null}>
        {
            <img src={sushiData.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushiData.name} - ${sushiData.price}
      </h4>
    </div>
  )
}

export default Sushi
