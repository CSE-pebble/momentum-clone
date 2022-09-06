const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); //event의 기본동작을 막아주는 코드
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value; //사용자 입력값 받아서 변수에 저장
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit); //submit event
