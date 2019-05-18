import React from "react";
import {Link} from "react-router-dom";
import "./landingpage.css";

// This is Ryan's slick code
// Logic is located below export

function LandingPage(){
  return (
  <div className="container">
    <Link className="split left" to="/login">
    </Link>
    <Link className="split right" to="/login">
    </Link>
  </div>
  )
}

export default LandingPage;

// conditional rendering - this will make the js work - Matt

// This doesn't work right now

window.onload = function(){
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


if (left){
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});
};

if (left){
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});
};

if (right){
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});
};

if (right){
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});
};
};