import React from 'react';
import { Formik, useFormik, validateYupSchema } from 'formik';
import { object, string, number, date, InferType } from 'yup';

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


  let validationSchema = object({
    name: string().required().min(3,"min 2 character").max(10,"max 10 char"),  // yup form system assign
    email: string().email(),
    password: string().min(6,"pass have min 6 character"),
   
  });
  
  const formik = useFormik({       // assign useFormik to formik and assign properties
    initialValues,
    onSubmit,
    validationSchema
  });
  console.error(formik.errors);
  
  const nameError = formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>

   const emailError = formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>
const passwordError = formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>
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
          {nameError}
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
           {emailError}
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
            {passwordError}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUp;
