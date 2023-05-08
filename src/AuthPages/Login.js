import React from 'react';
import "./Login.css"
import { Formik } from 'formik';
import empowerImage from "../Public/Empowerment.png"
import iconEmpower from "../Public/iconEmpower.png"

const Login = () => (
<div className="loginPage">

  <div className="empowerImage">
    <img src={empowerImage} alt="" />
  </div>
  <div className='login__form'>
    <Formik
      initialValues={{ email: '', password: '' }}

      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>

          <img src={iconEmpower} alt="" className='iconEmpower'/>
          <label htmlFor="">Username / Email <sup>*</sup></label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          <div className="errors">
          {errors.email && touched.email && errors.email}

          </div>

          <label htmlFor="">Password<sup> *</sup></label>

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            />
          <div className="errors">
          {errors.password && touched.password && errors.password}

          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
            </div>
);

export default Login;