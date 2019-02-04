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
    .then(sushiData => {
      this.setState({ sushis: sushiData })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} />
        <Table />
      </div>
    );
  }
}

export default App;
