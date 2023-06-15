import React,{useState, useEffect} from 'react'


const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
       // calls with first render and dependent on count
        console.log("useEffect");
    },[count])
  
    const handleOnClick = () => {
      setCount((count) => count + 1);
    };
  
    return (
      <div>
        {console.log("rendering")}
        <h1>Count: {count}</h1>
        <button onClick={handleOnClick}>+</button>

        <button onClick={()=>{setIsLoading(!isLoading)}}>Loading</button>
      </div>
    );
  };
  
  export default UseEffect;
  