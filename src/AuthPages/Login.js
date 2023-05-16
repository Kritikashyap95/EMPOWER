import React, { useState } from "react";
import "./Login.css";
import { Formik } from "formik";
import mpower from "../images/women-emp.png";
//import { useNavigate } from "react-router";
//import EmployeeDashboard from "../Pages/employee";
import iconEmpower from "../images/Empower+Title+BLACK.png"
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Loader from "../components/Loader";
import EastIcon from "@mui/icons-material/East";

const Login = () => {
  const [flag, setFlag] = useState(true);
  const [loading, setloading] = useState(false);
  function loader() {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }
  return (
    <div className="loginPage">
      <div className="empowerImage">
        <img src={mpower} alt="img.png" />
      </div>
      <div className="login__form">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("vgvhvhhv");

            setTimeout(() => {
              setSubmitting(false);
            }, 200);
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
              <img src={iconEmpower} alt="" className="iconEmpower" />
              <div
                className="admin"
                style={{ backgroundColor: `${flag ? "green" : "white"}` }}
                onClick={() => setFlag(true)}
              >
                {" "}
                Admin{" "}
              </div>
              <div
                className="employee"
                style={{ backgroundColor: `${!flag ? "green" : "white"}` }}
                onClick={() => {
                  setFlag(false);
                }}
              >
                Employee
              </div>
              <label htmlFor="" className="username">
                Username / Email <sup>*</sup>
              </label>
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
              

              
              <button type="submit" disabled={isSubmitting} onClick={loader}>
                <div className="Nextbtn">
                  Next <EastIcon />{" "}
                </div>{" "}
                <Loader loading={loading} />
              </button>

              <p>Forgot Username?</p>

              <p>
              <u>Click Here</u> to get your Username
              </p>

              <div className="login_container">
                Login with{" "}
                <div className="login_icon">
                  <GoogleIcon /> <FacebookIcon /> <GitHubIcon />
                </div>
              </div>
               {/* <label htmlFor="" className="password">
              Password<sup> *</sup>
            </label> 

              <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className="errors">
              {errors.password && touched.password && errors.password}
            </div>  */}
            
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
