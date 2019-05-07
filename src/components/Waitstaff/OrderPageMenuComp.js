import React from "react"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

function MenuOrderComp() {
  return (
    <div>
      <h3>
        Menu Comp
      </h3>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Menu Item 1</th>
            <th>Data</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Menu Item 2</td>
            <td><Button /></td>
            <td>Data</td>
          </tr>
          <tr>
            <td>Menu Item 3</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <td>Menu Item 4</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="warning">Order</Button>
    </div>
  )
}

export default MenuOrderComp