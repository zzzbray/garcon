import React from "react";

const padthis = {
  paddingTop: "15px"
}

function Header(){
  return (
    <header id="header" style={padthis}>
    <div class="container">
      <div class="row">
        <div class="col-sm-10">
          <h2>Cochon Volant Brasserie</h2>
        </div>
      </div>
    </div>
  </header>
  )
}


export default Header;