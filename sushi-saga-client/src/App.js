import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
//
// let start
// let end

class App extends Component {

  state = {
    sushis: [],
    balance: 100,
    emptyPlates: [],
    start: 0,
    end: 4
  }

componentDidMount(start = 0, end = 4) {
  fetch(API)
  .then(resp => resp.json())
  .then(sushis => {
    console.log(sushis);
    let fourSushis = sushis.slice(this.state.start, this.state.end)
    console.log(fourSushis)
    this.setState({ sushis: fourSushis })
  })
}

handleOnMoreSushiClick = () => {
  this.setState({
    start: this.state.start + 4,
    end: this.state.end + 4
  })
  fetch(API)
  .then(resp => resp.json())
  .then(sushis => {
    if (this.state.start < 100) {
      let fourSushis = sushis.slice(this.state.start, this.state.end)
      console.log(fourSushis)
      this.setState({ sushis: fourSushis })
    } else {
      this.setState({
        start: 0,
        end: 4
      })
    }
  })
}

handleOnEatenSushiClick = (sushiId) => {
  const sushis = this.state.sushis.map( sushi => {
    if (sushi.id !== sushiId) {
      return sushi
    }
    if (this.state.balance >= sushi.price) {
      this.setState({
        balance: this.state.balance - sushi.price,
        emptyPlates: [...this.state.emptyPlates, sushi]
      })
      return ''
    } 
  })
  this.setState({ sushis })
}

handleOnMoreMoneyClick = (e) => {
  console.log(e.target.value);
  this.setState({
    balance: e.target.value
  })
}


  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          handleOnMoreSushiClick={this.handleOnMoreSushiClick}
          handleOnEatenSushiClick={this.handleOnEatenSushiClick}
          handleOnMoreMoneyClick={this.handleOnMoreMoneyClick}
          balance={this.state.balance}/>
        <Table balance={this.state.balance} emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;
