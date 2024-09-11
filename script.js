const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

//DOM의 스타일을 다룰때 중요한점
h1.style.color = "blue";

//css로 적용된 스타일값을 자바스크롭 가져오는 법
//html을 브라우저가 생성하는 DOM, css를 해석해서 생성하는 cssDOM
//자바스크립트는 DOM만 제어가능할뿐, cssDOM접근, 제어가 불가능
//그래서 이미 화면상에 스타일적용되어 있다 하더라도 DOM자체적으로 스타일 값이 없음
console.dir(h2.style);
console.log(h2.style.color);

//결국 자바스크립트는 cssDOM에 의해서 생성된 스타일객체에 접근할 수 없기 때문에
//화면에 렌더링된 스타일 값을 가져오기 위해서는
//화면에 이미 출력된 값을 역으로 연산해서 가져옴
//아래처럼 이미 출력된 값을 재연산해서 가져오기 때문에
//반환값이 color:'violet'아닌 실제적인 수치값은 rgb(238,130,223)정보 반환
console.log(getComputedStyle(h2).color); //rgb(238,130,233)
console.log(getComputedStyle(h1).fontSize); //160px
