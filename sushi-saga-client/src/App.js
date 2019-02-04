import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  state = { allSushi: [] }


componentDidMount() {

  fetch(API)
  .then(r => r.json())
  .then(data => this.setState({ allSushi: data})
)


}

render() {
  const { allSushi } = this.state


  return (
    <div className="app">
    <SushiContainer sushis={this.state.allSushi} />
    <Table />
    </div>
  );
}
}

export default App;
