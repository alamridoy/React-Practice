import React from 'react'

const List = ({city,github}) => {
    console.log(github);
  return (
    <div>
        <h2>This is class component learning--</h2>
         <h3>{city}</h3>
      <github/>
    </div>
  )
}

export default List