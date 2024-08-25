import React from "react";
import { TextField, Alert, Button } from "@mui/material";

export default function CancelTickets() {
  return (
    <div className='main-content'>
      <h1>Cancel Tickets</h1>
      <TextField style={{padding:'10px'}}
          type="text"
          id="numerOfTickets"
          label="Enter the Ticket ID"
          value={''}
        
          name="numerOfTickets" />
          <div>
          <Button variant="contained" size="large" >Cancel</Button>

          </div>
    </div>
  );
}
