import React,{useState,useEffect} from 'react';
import style from './login.module.css'


const Login = () => {

const[email,setEmail]= useState("")
const[password,setPassword]= useState("")

useEffect=(()=>{
    
})


  return (
    <div>
      <h2>Login</h2>
      <form className={style.container}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
