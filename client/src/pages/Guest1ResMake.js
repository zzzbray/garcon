import React from "react";
import { Form, Button } from "react-bootstrap";

function GuestResMakePage(){
  return (
  <div>
    <h1>Guest Reservation Make Page</h1>
    <div>
      <Form>
        <Form.Group controlId="resData">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" id="reservationDate"/>
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" id="reservationTime"/>
          <Form.Label>Number in Party</Form.Label>
          <Form.Control type="number" id="partySize"/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Make Reservation
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default GuestResMakePage;