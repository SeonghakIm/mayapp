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

//1.4 유용한 spread operator
/*
const days = ["Mon", "Tue", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays = days + otherDays;
이러면 allDays는 string이 된다.
*/
//어떻게 days와 otherDays를 합친 배열을 만들 수 있을까?
//spread operator는 배열로부터 아이템을 가져와 unpack한다.
/*
const allDays = [days, otherDays];
이러면 원소가 3개인 배열 두개를 포함한 배열이 되지만
const allDays = [...days, otherDays];
이러면 원소가 ["Mon", "Tue", "Wed", otherDays]가 되고
const allDays = [...days, ...otherDays];
이러면  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]가 된다.
*/

/*
const ob {first: "hi", second: "hello"};
const ab {third: "안녕"};
const two = {...ob, ...ab};
일 때 {first: "hi", second: "hello", third: "안녕"}이 된다.
*/

//1.5 Classes
//생략

//1.6 array map
/* 다시 보는 맵 사용법
const allDays = [...days, ...otherDays];
const smilingDays = allDays.map(day => `^^${day}`);
map은 기본적으로 index인자를 제공한다.
const smilingDays = allDays.map((day, index)=>`#${index}^^${day}`);
*/

//1.7 Array filter
//filter는 함수를 실행해 true를 반환하는 값만 array에 넣는다.
/*
const numbers = [2, 45, 232, 12]

const biggerThan15 = numbers.filter(num => num>15)
biggerThan15 = [45, 232]