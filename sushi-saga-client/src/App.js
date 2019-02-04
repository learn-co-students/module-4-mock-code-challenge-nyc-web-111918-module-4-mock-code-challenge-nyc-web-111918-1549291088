import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: []
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then((response)=>{
        this.setState({sushis: response})
      })  
  }


  render() {
    return (
      <div className="app">
        <SushiContainer allSushis={this.state.sushis} />
        <Table />
      </div>
    );
  }
}

export default App
