import React from "react";
import "./landingpage.css";

// This is Ryan's slick code
// Logic is located below export

function LandingPage(){
  return (
  <div className="container">
    <div className="split left">
      <a href="login.html" className="button"> Piggy</a>
    </div>
    <div className="split right">
      <a href="login.html" className="button"> Bully</a>
    </div>
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