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
            <th>Menu Item</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Menu Item </td>
            <td>Add</td>
          </tr>
          <tr>
            <td>Menu Item </td>
            <td>Add</td>
          </tr>
          <tr>
            <td>Menu Item </td>
            <td>Add
              {/* <div id='counter'>{this.state.counter}
                <button onClick = {this.increment}> Add 1 </button> 
                <button onClick = {this.decrement}> Minus 1 </button> 
              </div> */}
            </td>
          </tr>
        </tbody>
      </Table>
      <Button variant="warning">Order</Button>
    </div>
  )
}

export default MenuOrderComp