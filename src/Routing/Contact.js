import React from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
  const nivigate = useNavigate()
  return (
    <div>
       <h1>Contact</h1>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <button onClick={()=>{
        nivigate("/")
      }}>Go to home page</button>
    </div>
  )
}

export default Contact 
