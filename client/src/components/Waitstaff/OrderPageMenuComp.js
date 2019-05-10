import React from "react"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

function MenuOrderComp(props) {
  const renderMenu = ({menu_id, menu_name, menu_price}) => <tr key={menu_id}><td>{menu_name}</td><td>{menu_price}</td><td><button id={menu_id}>Add</button></td></tr>;
  // <div key={menu_id}>{menu_name}</div>;

  
  
  return (
    <div>
      <h3>
        Menu Comp
      </h3>
      {/* {props.menu.map(renderMenu)}    */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Menu Item</th>
            <th>Price</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {props.menu.map(renderMenu)}
          {/* <tr>
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
              <div id='counter'>{this.state.counter}
                <button onClick = {this.increment}> Add 1 </button> 
                <button onClick = {this.decrement}> Minus 1 </button> 
              </div>
            </td>
          </tr> */}
        </tbody>
      </Table>
      <Button variant="warning">Order</Button>
    </div>
  )
}

export default MenuOrderComp