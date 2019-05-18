// This will be the table for Waitstaff to keep track of active tables

import React from "react"
import { Table, Button } from "react-bootstrap"

function OrderPageCurReceiptComp() {
  return (
    <div>
      <h2>
        Current Receipt
      </h2>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>Table 14</td>
            <td>$currentTotal</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="danger">View Receipt</Button>
    </div>
  )
}

export default OrderPageCurReceiptComp
