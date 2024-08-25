import React, { useState } from "react";
import textConstant from "../config";
import { TextField, Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const adminData = textConstant.adminDetails;
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    customerName: "",
    password: "",
  });
  const [submitStatus, setSubmitStatus] = useState("none");
  function handleChange(e) {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit() {
    let redirect = "no";
    if (customerDetails.customerName && customerDetails.password) {
      if (
        customerDetails.customerName === adminData.userName &&
        customerDetails.password === adminData.passWord
      ) {
        redirect = "Yes";
        setSubmitStatus("Valid");
      } else {
        setSubmitStatus("Invalid");
      }
    } else {
      setSubmitStatus("Fail");
    }
    setTimeout(() => {
      setSubmitStatus("none");
      if (redirect === "Yes") {
        navigate("/home");
      }
    }, 3000);
  }
  return (
    <div>
      <nav>
      <br />
      <div>
        <h3>ADMIN LOGIN</h3>
      </div>

      <br />
      <br />
      <div>
        <TextField
          type="text"
          id="customerName"
          label="User name"
          value={customerDetails.customerName}
          onChange={handleChange}
          name="customerName"
          error={submitStatus === "Invalid" || submitStatus === "Fail"}
        />
      </div>
      <br />
      <div>
        <TextField
          type="password"
          id="password"
          label="Password"
          value={customerDetails.password}
          onChange={handleChange}
          name="password"
          error={submitStatus === "Invalid" || submitStatus === "Fail"}
        />
      </div>
      <br />
      <Button variant="contained" size="large" onClick={handleSubmit}>
        submit
      </Button>
      <br />
    
  
      <br />
      <br />
      <br />
      {submitStatus === "Valid" && (
        <Alert variant="filled" severity="success">
          Login Successfull
        </Alert>
      )}
      {submitStatus === "Invalid" && (
        <Alert variant="filled" severity="error">
          Login Failed
        </Alert>
      )}
      {submitStatus === "Fail" && (
        <Alert variant="filled" severity="warning">
          Please Enter all the fields to proceed
        </Alert>
      )}
      
      </nav>
    </div>
  );
}
export default Login;
