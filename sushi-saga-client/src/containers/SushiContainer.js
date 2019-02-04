import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state = {
    page: 1
  }
  renderSushi() {
    const filteredSushis = this.props.allSushis.filter((sushi)=> {
      return parseInt(sushi.id) <= this.state.page + 3 & parseInt(sushi.id) >= this.state.page
    })
    return filteredSushis.map((sushi, i)=>{
      return <Sushi key={i} aSushi={sushi} />
    })
  }//end render sushi

  handleMoreSushi = (newValue) => {
    console.log(newValue);
    this.setState({page: newValue})
  }

  render () {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushi()}
          <MoreButton moreSushiButton={this.handleMoreSushi} pageCount={this.state.page} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
