import React, { Component } from 'react';
import HomePage from './HomePage';
import LogInPage from './LogInPage';

class Conditional_Rendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    const { isLoggedIn } = this.state;
  
   return (
    <div>
        <h3>Conditional Rendering</h3>
        {isLoggedIn ? <HomePage/> : <LogInPage/>}
    </div>
   )
}
}

export default Conditional_Rendering;
