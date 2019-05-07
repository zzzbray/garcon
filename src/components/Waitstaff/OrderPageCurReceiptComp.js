// This will be the table for Waitstaff to keep track of active tables

import React from "react"
import Table from "react-bootstrap/Table"

function OrderPageCurReceiptComp() {
  return (
    <div>
      <Table striped bordered hover variant="dark">
      <h1>Current Receipt</h1>
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
    </div>
  )
}

export default OrderPageCurReceiptComp