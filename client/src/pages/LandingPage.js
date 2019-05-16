import React from "react";
import "./landingpage.css";

// This is Ryan's slick code
// Logic is located below export

function LandingPage(){
  return (
  <div className="container">
    <div className="split left">
      <h1>Cochon Volant Brasserie</h1>
      <img>
      </img>
      <a href="login.js" className="button"> Piggy</a>
    </div>
    <div className="split right">
      <h1>Taureaux Tavern</h1>
      <img>
      </img>
      <a href="login.js" className="button"> Bully</a>
    </div>
  </div>
  )
}

export default LandingPage;

// conditional rendering - this will make the js work - Matt

// This doesn't work right now

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

if(left){
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left', false);
});
};
if(left){
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});
};
if(right){
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right', false);
});
};
if(right){
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});
};

