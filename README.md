#mayapp

//arrow function의 예시들
/\*
const sayHello = (name = "human") => "hello " + name;

const button = document.querySelector("button");

const handleClick = event => console.log(event);

button.addEventListener("click", handleClick );
\*/
//button.addEventListener("click", event => console.log(event) );

//template literal의 예시들
/\*
const sayHello = (name = "human") => "hello " + name;

const sayHello = (name = "human") => `hello $(name)`;
\*/

//structuring
/_
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
_/

// 밑의 방식은 매우 비효율적!!(중복 선언 느낌)
/_
const name = human.name;
const lastName = human.lastName;
_/
// { }는 object안의 property를 가져옴을 의미함
// {} 뒤에 = name으로 가져온 struct를 명시
/_
const { name, lastName } = human;
_/

// 만약 nationality를 다른 이름으로 저장하고 싶을 때
/_
const difName = human.nationality;
또는
const {name, lastName, nationality: difName} = human;
_/

/_
const dinner = human.favFood.dinner;
또는
const {name, lastName, nationality: difName, favFood:{dinner, breakfast, dinner}} = human;
_/

/_
nationality: difName은 nationality를 difName이라는 이름으로 저장한다는 것을 말하고
nationality: {difName}은 nationality 안의 difName variable을 찾는 것을 말함(전혀 다른 의미)
_/

//1.4 유용한 spread operator
/\*
const days = ["Mon", "Tue", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays = days + otherDays;
이러면 allDays는 string이 된다.
_/
//어떻게 days와 otherDays를 합친 배열을 만들 수 있을까?
//spread operator는 배열로부터 아이템을 가져와 unpack한다.
/_
const allDays = [days, otherDays];
이러면 원소가 3개인 배열 두개를 포함한 배열이 되지만
const allDays = [...days, otherDays];
이러면 원소가 ["Mon", "Tue", "Wed", otherDays]가 되고
const allDays = [...days, ...otherDays];
이러면 ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]가 된다.
\*/

/_
const ob {first: "hi", second: "hello"};
const ab {third: "안녕"};
const two = {...ob, ...ab};
일 때 {first: "hi", second: "hello", third: "안녕"}이 된다.
_/

//1.5 Classes
//생략

//1.6 array map
/_ 다시 보는 맵 사용법
const allDays = [...days, ...otherDays];
const smilingDays = allDays.map(day => `^^${day}`);
map은 기본적으로 index인자를 제공한다.
const smilingDays = allDays.map((day, index)=>`#${index}^^${day}`);
_/

//1.7 Array filter
//filter는 함수를 실행해 true를 반환하는 값만 array에 넣는다.
/\*
const numbers = [2, 45, 232, 12]

const biggerThan15 = numbers.filter(num => num>15)
biggerThan15 = [45, 232]
\*/

//1.8 forEach includes push
/_
const numbers = [2, 45, 232, 12];
numbers.forEach(number => console.log(post));
map과의 차이점! map은 함수를 실행한 결과값들을 담은 새로운 배열 리턴, forEach는 원소들에 대해 각자 실행만 함
_/

/_
numbers.push(15);
numbers = [2, 45, 232, 12, 15];
if (numbers.includes(2)){
console.log("2 is here!");
}
_/

2.0
npx로 create-react-app을 하면 실행 이후에 create-react-app을 삭제해줌!(잘 쓰지 않고 outdated될 수 있기 때문에 컴퓨터에 둘 필요가 없음)

2.1
오직 router안에서만 route할 수 있음

2.2
hashRouter는 화면 이동할 때 refresh가 되지 않아 앱의 느낌을 준다.
browserRouter는 화면 이동할 때 refresh된다.
exact가 없을 때 여러 화면이 동시에 겹쳐 보이는 건 Composition 기능 때문이다(두 개 이상의 Route를 렌더링하는 방식)

3.0
index.js로 import를 간결하게 만들 수 있다(폴더명만 적어도 되기 때문에).
페이지별로 폴더를 만들어 관리할 수 있다.
하지만 className을 매번 암기해줘야하는데(css가 글로벌하게 적용되기 때문)
컴포넌트에서만 적용되는 CSS를 만들어줄 방법을 찾자
