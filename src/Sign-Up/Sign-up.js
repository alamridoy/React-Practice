import React from 'react';
import { Formik, useFormik } from 'formik';

const SignUp = () => {
  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({values:""});
  };

  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <div>
      <h1>Control form data using Formik package</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUp;
