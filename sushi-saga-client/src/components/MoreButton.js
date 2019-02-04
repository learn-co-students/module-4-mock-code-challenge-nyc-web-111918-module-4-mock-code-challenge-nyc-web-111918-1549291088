import React from 'react'

const MoreButton = (props) => {
    return (
        <div>
          <button onClick={props.handleOnMoreSushiClick}>
            More sushi!
          </button><br/>
          <form>
            <input type="text"/>
            <button type="button" onClick={this.handleOnMoreMoneyClick}>More money!!</button>
          </form>
        </div>
      )
}

export default MoreButton
