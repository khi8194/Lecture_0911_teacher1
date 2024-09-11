const a = document.querySelector("a");
console.dir(a);

//a.href = "https://www.naver.com";
//console.log(a.href);

//문서객체의 속성값 변경, 속성환 반환을 위한 전용 내장 함수
//setAttribute, getAttribute라는 내장 함수를 이용하면
//data-접두사가 붙은 커스텀 속성도 편하게 수정, 호출 가능
a.setAttribute("href", "https://www.naver.com");

//문서객체의 특정 속성값 가져오기
console.log(a.getAttribute("href"));

//a.data-index = '3';
a.setAttribute("data-index", 3);
console.log(a.getAttribute("data-index"));
console.dir(a);
