//단수의 html요소 선택시
const h1 = document.querySelector("h1");
console.log(h1);
//console.dir(h1);

//특정 부모요소 안쪽의 자식 요소 탐색 선택
const title = document.querySelector(".title a");
console.log(title);

//복수개 요소 탐색하는 방법
const lis = document.querySelectorAll("ul li");

//배열형태로 반환된 복수개의 html요소 하나씩 선택
for (let i = 0; i < 4; i++) {
  console.log(lis[i]);
}

//화살표함수 표현식과 forEach내장함수를 이용한 DOM반복 선택방법
//배열.forEach((반복요소,순번)=>{반복코드})
lis.forEach((el) => console.log(el));

//자바스크립트에서 함수 만드는 법
//1. 함수선언식
function plus(num1, num2) {
  const result = num1 + num2;
  return result;
}
console.log(plus(2, 4));

//2. 함수표현식 (변수에 익명함수 대입)
const minus = function (num1, num2) {
  const result = num1 - num2;
  return result;
};
console.log(minus(3, 1));

//3. 화살표 함수로 축약된 함수 표현식
//화살표 함수에서는 function키워드 생략, 중괄호 안쪽에 return문만 있으면 중괄호와 return문도 생략가능
//화살표 함수는 단지 기존 코드의 축약 말고도
//함수 내부의 this객체 생성을 막아서 고정해주는 효과 (객체지향 프로그램시 필요)
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(3, 3));
