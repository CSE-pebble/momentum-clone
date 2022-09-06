const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); //event의 기본동작을 막아주는 코드
  const username = loginInput.value; //사용자 입력값 받아서 변수에 저장
  loginForm.classList.add("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit); //submit event
