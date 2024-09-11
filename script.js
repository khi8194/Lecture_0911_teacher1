const h1 = document.querySelector("h1");
const link = document.querySelector(".title a");
const lis = document.querySelectorAll("ul li");

console.dir(h1);
console.dir(link);
console.dir(lis[0]);

//DOM 스타일 제어 (style)
h1.style.backgroundColor = "pink";

//DOM 속성 변경 (attribute)
link.href = "https://www.naver.com";

//DOM의 텍스트 변경 (textNode)
lis[0].innerText = "목록1";

//DOM의 html구성 변경 (elementNode)
lis[1].innerHTML = "<span>list2</span>";

//이벤트 : 사용자, 시스템이 웹상에서 발생시키는 모든 액션
// 사용자 이벤트 : click, mouseover, mouseout, resize, scroll, mousewheel, mousemove
// 시스템 이벤트 : load, error,

//DOM의 이벤트 연결
lis[2].onclick = () => {
  console.log("You clicked list3");
};
