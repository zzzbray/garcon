// This will be the table for Waitstaff to keep track of active tables

import React from "react"
import Table from "react-bootstrap/Table"

function CurrentTablesComp() {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>receipt_id</th>
            <th>Maybe Something</th>
            <th>Maybe Something</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default CurrentTablesComp