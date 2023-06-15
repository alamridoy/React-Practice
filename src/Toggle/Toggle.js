import React,{useState} from 'react'

const Toggle = () => {
    const [toggle, setToggle]= useState(true)
   

  return (
    <div style={{margin:"1rem",backgroundColor:"pink",padding:"1 rem"}} >
        <h3>Toggle Practice</h3>
    {toggle && (<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... It uses a dictionary of over 200 Latin words, combined with a handful of ...</p>)}

    <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Hide":"Show"}</button>
   
    </div>
  )
}

export default Toggle
