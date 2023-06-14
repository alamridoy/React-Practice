import React, { Component } from 'react'

export default class STATE extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>This is state and setState learning</h1>
        <h4>Count: {count}</h4>
        <button className="countButton" onClick={this.handleIncrement} disabled={count === 10 ? true : false}>
          +
        </button>
        <button className="countButton" onClick={this.handleDecrement} disabled={count === 0 ? true : false}>
          -
        </button>
      </div>
    )
  }
}
