import React, { useState } from 'react';
import { TextField, Alert, Button } from "@mui/material";
import { Bolt } from '@mui/icons-material';
function BookTickets() {
  const [customerDetails, setCustomerDetails] = useState({
    customerName: '',
    customerNumber: null,
    numerOfTickets: 0
  })
  function handleChange(e) {

    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit() {
    console.log(customerDetails)
  }
  return (
    <div className='main-content'>
     

      <br />
      <br />
      <div class='textfield-button' style={{padding:'10px'}}>
      <h3 style={{color:'red'}}>Book Your tTckets</h3>
      <div>
        <TextField style={{padding:'10px'}}
          type="text"
          id="customerName"
          label="customerName"
          value={customerDetails.customerName}
          onChange={handleChange}
          name="customerName" />
      </div>
      <div>
          <TextField style={{padding:'10px'}}
            type="text"
            id="customerNumber"
            label=" customerNumber"
            value={customerDetails.customerNumber}
            onChange={handleChange}
            name="customerNumber" />
        </div>
      <div>
        <TextField style={{padding:'10px'}}
          type="text"
          id="numerOfTickets"
          label="Number Of Tickets"
          value={customerDetails.numerOfTickets}
          onChange={handleChange}
          name="numerOfTickets" />
      </div>
      </div>
      <Button variant="contained" size="large" onClick={handleSubmit}>submit</Button>
      <br />
      <br />
      <br />

    </div >
  )
}
export default BookTickets;