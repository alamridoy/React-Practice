import React, { useState } from 'react';
import axios from 'axios';
import style from './registration.module.css'

const Registration = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
    if (name === 'password') setPassword(value);
    if (name === 'confirm_password') setConfirmPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:3000/api/v1/authentication/registration', {
        email,
        phone,
        password,
        confirm_password,
      });

      console.log(response.data); 

     
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');

     
      alert('Registration successful!');
    } catch (error) {
      console.error(error);
     
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className={style.registration}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />

        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" value={phone} onChange={handleInputChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handleInputChange} required />

        <label htmlFor="confirm_password">Confirm Password:</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={confirm_password}
          onChange={handleInputChange}
          required
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Registration;
