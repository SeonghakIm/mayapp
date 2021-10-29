import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


//arrow function의 예시들
const sayHello = (name = "human") => "hello " + name;

const button = document.querySelector("button");

const handleClick = event => console.log(event);

button.addEventListener("click", handleClick );
//button.addEventListener("click", event => console.log(event) );