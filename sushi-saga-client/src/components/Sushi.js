import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }


  handleClick = event => {
    console.log(this.state.eaten);
    if (!this.state.eaten){
     this.setState({eaten: !this.state.eaten},()=>console.log(this.state.eaten))
   }
  }


  render () {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.handleClick}>
        {this.state.eaten ? null: <img src={this.props.aSushi.image_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.aSushi.name} - ${this.props.aSushi.price}
        </h4>
      </div>
    )
  }

}

export default Sushi
