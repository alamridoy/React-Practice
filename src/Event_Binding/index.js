import React, { Component } from 'react'

class Event_Binding extends Component {
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
        <p>Event Binding </p>
        <button onClick={this.handleIncrement}>Increase</button>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}


export default Event_Binding;