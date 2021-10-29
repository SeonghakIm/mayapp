import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


//arrow function의 예시들
/*
const sayHello = (name = "human") => "hello " + name;

const button = document.querySelector("button");

const handleClick = event => console.log(event);

button.addEventListener("click", handleClick );
*/
//button.addEventListener("click", event => console.log(event) );

//template literal의 예시들
/*
const sayHello = (name = "human") => "hello " + name;

const sayHello = (name = "human") => `hello $(name)`;
*/

//structuring
/*
const human = {
    name: "seonghak",
    lastName: "Im",
    nationality: "Korean"
    favFood:{
        breakfast: "banana",
        lunch: "hamburger",
        dinner: "remen"
    }
}
*/

// 밑의 방식은 매우 비효율적!!(중복 선언 느낌)
/*
const name = human.name;
const lastName = human.lastName;
*/
// { }는 object안의 property를 가져옴을 의미함
// {} 뒤에 = name으로 가져온 struct를 명시
/*
const { name, lastName } = human;
*/

// 만약 nationality를 다른 이름으로 저장하고 싶을 때
/*
const difName = human.nationality;
또는 
const {name, lastName, nationality: difName} = human;
*/

/*
const dinner = human.favFood.dinner;
또는
const {name, lastName, nationality: difName, favFood:{dinner, breakfast, dinner}} = human;
*/

/*
nationality: difName은 nationality를 difName이라는 이름으로 저장한다는 것을 말하고
nationality: {difName}은 nationality 안의 difName variable을 찾는 것을 말함(전혀 다른 의미)
*/