import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis?_limit=4"


class App extends Component {

  componentDidMount() {
    fetch(`http://localhost:3000/sushis?_limit=4&_page=${this.state.page}`)
    .then(r => r.json())
    .then(myJson => this.setState({sushis: myJson}))
  }

  state = {
    sushis: [],
    money: 100,
    plated: [],
    page: 1
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
        sushis={this.state.sushis}
        page={this.state.page}
          />
        <Table money={this.state.money} plated={this.state.plated}/>
      </div>
    );
  }
}

export default App;
