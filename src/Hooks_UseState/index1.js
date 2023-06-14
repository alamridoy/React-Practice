import React, { Component } from 'react'

class Hooks_UseState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          count: 0
        }
        this.handleIncrement = this.handleIncrement.bind(this) //using bind without arrow function used
      }
    
      handleIncrement(){
        this.setState({
          count: this.state.count + 1
        })
      }
    
    
  render() {
    return (
      <div>
        <p>----Hooks---- </p>
        <button onClick={this.handleIncrement}>Increase</button>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}


export default Hooks_UseState;