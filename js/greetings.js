const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //event의 기본동작을 막아주는 코드
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value; //사용자 입력값 받아서 변수에 저장
  localStorage.setItem(USERNAME_KEY, username); // local에 값 기억
  paintGreetings(username); // 새로 값 입력했을 때 값 넣어서 보여주는 코드
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit); //submit event
} else {
  // 기존에 값 입력했다면 계속 그 값 유지해주는 코드
  paintGreetings(savedUsername);
}
