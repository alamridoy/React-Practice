import React, { Component } from 'react'

class Event_Handeler_Class extends Component {

constructor(props) {
  super(props)

  this.state = {
     changeValue : ''
  }
}

  handleOnChange=(e)=>{
        
        this.setState(
            {
                changeValue: e.target.value
            },()=>{
                console.log(this.state.changeValue) //call back function get data
            }
        )
        
    }
    render() {

    return (
      <div>
        <p>--- Event handeler---</p>
        <input type='text' onChange={this.handleOnChange}/>
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}

export default Event_Handeler_Class;