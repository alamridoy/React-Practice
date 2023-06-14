import React,{useState} from 'react';
import styles from './form.module.css';

function Form() {

  //useState
//   const [name,setName]=useState('')
//   const [email,setEmail]=useState('')
//   const [password,setPassword]=useState('')

const [user,setUser] = useState({name:'',email:'',password:''})  //oneline useState
const{name,email,password}= user

//   const handleNameChange = (event) => {
//     setUser({name: event.target.value,email,password});
//   }; 

//   const handleEmailChange = (event) => {
//     setUser({name,email: event.target.value,password});
//   };

//   const handlePasswordChange = (event) => {
//     setUser({name,email,password:event.target.value});
//   };


  const handleChanger = (event) => {
    const fieldName = event.target.name
    // if(fieldName==='name'){
    //     setUser({name: event.target.value,email,password});
    // }
    // if(fieldName==='email'){
    //     setUser({name,email: event.target.value,password});
    // }
    // if(fieldName==='password'){
    //     setUser({name,email,password:event.target.value});
    // }
    // console.log("handle changer");
    setUser({...user,[event.target.name]:event.target.value})
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form is submitted!');
  
    console.log(user);
    
  };


  return (
    <div>
        <h1>--Controlled component--</h1>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={name} onChange={handleChanger} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={email} onChange={handleChanger} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={password} onChange={handleChanger} required />
        </div>

        <div className={styles.formGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
