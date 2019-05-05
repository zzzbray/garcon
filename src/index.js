import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// Logic below is the logic that made Ryan's Landing Page work
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});