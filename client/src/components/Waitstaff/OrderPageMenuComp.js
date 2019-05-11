import React from "react"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

function MenuOrderComp(props) {
  
  const handleClick = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    console.log("Clicked button id: ", event.target.id)
  };

  // renderMenu function that takes in menu data (pulled from db in App.js) and dynamically
  // generates HTML to insert them into the table coded by this component.
  // We call this function as the callback to the map function on line 32 below.
  const renderMenu = ({menu_id, menu_name, menu_price}) => <tr key={menu_id}><td>{menu_name}</td><td>{menu_price}</td><td><button id={menu_id} onClick={handleClick}>Add</button></td></tr>;
  
  return (
    <div>
      <h3>
        Menu Comp
      </h3>
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