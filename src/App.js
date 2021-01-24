import React, { Component } from 'react';
import './App.css';
import  { BoxContainer } from './components/box-container/box-container.component'

class App extends Component {
constructor() {
  super();

  this.state = {
    testArray: [],
    results: [],
    lados: '',
    lanzadas: ''
  };

}

dice = () => {
  const roll = Math.floor((Math.random() * this.state.lados ) + 1);
  return  this.state.results.push(roll);
}

diceRoller = () => { 
  let i = 0;
  for (i=0; i<this.state.lanzadas; i++) {
    this.dice();
  }
  return this.setState({testArray: this.state.results });
}

clearState = () => {
  this.setState({testArray: [] });
  this.setState({results: [] });
}

  render() {
    return(

      <div className="App">

       <h1> Roll a Dice! </h1>

        <input 

          type='number' 
          placeholder='Number of throws' 
          onChange={lanzadas => this.setState({ lanzadas: lanzadas.target.value }) }

        />

         <input 

          type='number' 
          placeholder='Number of sides'
          onChange={lados => this.setState({ lados: lados.target.value })}

         />

        <button onClick={ this.clearState } > Clear </button>

        <button onClick={ this.diceRoller }> Roll a Dice </button>

        <BoxContainer testArray={ this.state.testArray } /> 

      </div>
    )  
  }
} 

export default App;
