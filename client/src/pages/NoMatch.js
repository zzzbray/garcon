import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/"><Button variant="success" size="lg" block>Go Back to Landing Page</Button></Link>
    </div>
  );
}

export default NoMatch;
