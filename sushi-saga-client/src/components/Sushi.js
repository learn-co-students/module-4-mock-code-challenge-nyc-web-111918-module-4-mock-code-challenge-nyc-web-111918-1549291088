import React, { Fragment } from 'react'


const Sushi = ({sushiData, handleOnEatenSushiClick }) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => handleOnEatenSushiClick(sushiData.id)}>
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
