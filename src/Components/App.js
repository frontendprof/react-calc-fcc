
import React, { Component } from 'react';

import Button from "./Button";
import Screen from "./Screen";






class App extends Component {

  constructor(props){
    super(props);
    this.state={
      current:[],
      result:0
    }
  }

  handleClick=button=>{
    const current=[...this.state.current];
    current.push(button);
    this.setState({current})
  }

  render() {

    const buttons = ["AC", "±", "%", "+", "7", "8", "9", "x", "4", "5", "6", "—", "1", "2", "3", "+", "0", ".", "="];

    return (
      <div className="App">
        <h1>App component</h1>
        {/* <Screen /> */}
        {buttons.map((item,index)=><Button handleClick={this.handleClick} key={index} name={item}/>)}
      </div>
    )
  }
}

export default App;
