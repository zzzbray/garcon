import React from "react"
import Table from "react-bootstrap/Table"

function ReceiptPageReceiptComp() {
  return (
    <div>
      <div><h1>Current Receipt</h1></div>
       <br />
<Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>menu_name</th>
            <th>menu_price</th>
            <th>time_added</th>
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

export default ReceiptPageReceiptComp