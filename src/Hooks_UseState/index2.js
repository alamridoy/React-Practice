import React,{useState} from 'react'

function Hooks_UseState2() {
    const[count,setCount] = useState(0)
    // const handleIncrement =()=>{
    //     setCount(count+1);
    // }
    const handleIncrement =()=>{
        setCount((count)=>count+1);//previous count + current count
        setCount((count)=>count+1);
        setCount((count)=>count+1);
    }
  return (
    <div>
        <p>using hooks with functional component</p>
     <h3>Count:{count}</h3>
     <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Hooks_UseState2
