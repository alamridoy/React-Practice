import React from 'react'

function Child(props) {

    const data = "I am from child component "
    props.onChildData(data)

  return (
    <div>
     <h2>Child TO Parent passing data</h2>
     <p>{props.data}</p>
    </div>
  )
}


export default Child; 