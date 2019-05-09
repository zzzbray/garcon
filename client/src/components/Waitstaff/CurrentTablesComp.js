// This will be the table for Waitstaff to keep track of active tables

import React from "react"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

function CurrentTablesComp() {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Table</th>
            <th>Current Total</th>
            <th>Order More</th>
            <th>Close Out</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>receipt_id</td>
            <td>$$</td>
            <td><Button /> </td>
            <td><Button /> </td>
          </tr>
          <tr>
            <td>receipt_id</td>
            <td>$$</td>
            <td><Button /></td>
            <td><Button /> </td>
          </tr>
          <tr>
            <td>receipt_id</td>
            <td>$$</td>
            <td><Button /></td>
            <td><Button /> </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default CurrentTablesComp