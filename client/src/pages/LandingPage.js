import React from "react";
import "./landingpage.css";

// This is Ryan's slick code
// Logic is located below export

function LandingPage(){
  return (
  <div className="container">
    <h1>
      Landing Page
    </h1>
    <div className="split left">
      <h1>Cochon Volant Brasserie</h1>
      <a href="login.html" className="button"> Piggy</a>
    </div>
    <div className="split right">
      <h1>Taureaux Tavern</h1>
      <a href="login.html" className="button"> Bully</a>
    </div>
  </div>
  )
}

export default LandingPage;

// conditional rendering - this will make the js work - Matt

// This doesn't work right now

// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const container = document.querySelector('.container');

// left.addEventListener('mouseenter', () => {
//     container.classList.add('hover-left');
// });

// left.addEventListener('mouseleave', () => {
//     container.classList.remove('hover-left');
// });

// right.addEventListener('mouseenter', () => {
//     container.classList.add('hover-right');
// });

// right.addEventListener('mouseleave', () => {
//     container.classList.remove('hover-right');
// });