// This will be the table for Waitstaff to keep track of active tables

import React from "react"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

function OrderPageCurReceiptComp() {
  return (
    <div>
      <h2>
        Current Receipt
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Column Head</th>
            <th>Column Head</th>
            <th>Column Head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="warning">View Receipt</Button>
    </div>
  )
}

export default OrderPageCurReceiptComp