const btn = document.querySelector("button");

//문서객체에 이벤트 속성에 직접 함수를 대입하면
//추후 다른 함수로 덮어쓰기될 잠재적인 이슈 발생
/*
btn.onclick = () => {
  console.log("엄청 중요한 기능");
};

btn.onclick = () => {
  console.log("쓰잘데기 없는 기능");
};
*/

//아래 같이 이벤트 전용 내장함수를 사용하면 기존 함수가 덮어씌어지는 이슈 방지 가능
btn.addEventListener("click", () => {
  console.log("엄청 중요한 기능");
});

btn.addEventListener("click", () => {
  console.log("쓰잘데기 없는 기능");
});

const a = document.querySelector("a");

//a요소에 이벤트 연결시 주의점
//a요소는 href값 등록된 url로 링크 이동이라는 디폴트 기능 설정
//a요소에 클릭 이벤트 연결할시에는 미리 링크이동이라는 디폴트 기능을 막아줌
a.addEventListener("click", (e) => {
  //a요소의 기본 기능인 링크기능을 막아주는 함수
  e.preventDefault();
  console.log("You clicked a button!!");
});
