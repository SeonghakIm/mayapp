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

3.1
css를 컴포넌트별로 해당하는 모듈로 변환하려면 create-react-app에서는
css 파일 이름이 a.css였다면 a.module.css라는 식으로 변환해서 사용하면 된다.
import 할때 import "a.css"가 아닌 import 이름 from "a.module.css"와 같이 하고 html에서 className을 이름.클래스이름 과 같이 지정해야 한다.
이래도 클래스이름을 기억해야한다는 귀찮음은 남는다.
또 자바스크립트에서는 클래스이름 중간에 -를 쓸 수 없음([]로 감싸야함)

3.3
기존 Styled-components는 local. Global한 방법도 존재함
css에서 position:fixed하면 스크롤 해도 그 위치에 남는다

3.4
header가 어떤 route에 있는지 보여주는 법
withRouter는 Header가 component를 가질 수 있게 해준다.
withRouter가 없으면 console.log(props)에서 props의 값이 없다.

9.1
react는 State와 Props를 가지고 있음!
커다란 component(Higher-order component)가 props를 내부의 component들과 공유해서 props를 여러번 부를 필요가 없게 해야하고,
그 State를 관리할 수(Prop들의 값을 바꿀 수) 있어야 한다.
큰 Component가 data state를 담당하고, state management가 필요해지면
Redux를 사용하면 된다.
또한 여러 층으로 이루어진 component에서 props를 요구하면, 중간단계 component들은 props를 전달하기만할 뿐 사용하지 않는데 이는 비효율일 뿐더러 문제가 될 수 있다.

component에게 데이터를 주는 대신 data 저장소(Object)를 따로 만든다.
State management library는 component에게 데이터를 전해주기 위해 존재한다.
저장소의 선택지 중 하나가 Redux, 또는 UseContext가 될 수 있다.
Context는 간단한 어플리케이션에 적합,
Redux는 다양한 state들의 많은 변화가 있을 때 적합

9.2
Hello, user!에서 Hello, Seonghak으로 바꿔보자
state를 가지는 가장 큰 component가 app이므로 app.js 수정
9.2-1
Props를 app -> screen -> header로 전달
비효율적이다.
9.2-2
context를 사용하기 위해 context.js를 생성
const UserContextProvider = ({ children }) => (
<UserContext.Provider value={{ name: "Seonghak" }}>
{children}
</UserContext.Provider>
);
이렇게 선언해주면 Provider의 모든 children은 name에 대한 접근 권한이 생긴다.
일단 Seonghak을 출력하도록 수정
9.2-3
login과 logout(상태변경)추가

9.3
context 안에서 API를 fetch해버리면 다른 component들이 API를 들고올 필요가 없다.
9.2에서는 screen과 header가 각자 useContext를 사용하는데, 이번에는 그럴 필요가 없이 세분화해보자

9.6 Reducer
component가 엄청나게 방대한 state를 가질 때 쓰인다.
reducer는 state와 action을 인자로 가지며 action은 type을 가진다.
action을 이용해 return하는 값이 state에 들어간다!!(state를 replace하는 object) 매우 중요함
useReducer는 reducer 함수를 사용한다.
action은 변수 이름일 뿐이다.
useReducer는 state와 dispatch를 제공한다.
dispatch는 function이며 action의 type값을 인자로 전달한다.
dispatch는 그러면 reducer를 불러준다.(현재 state와 지정한 action의 type을 인자로 가지고)
