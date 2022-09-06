const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); //event의 기본동작을 막아주는 코드
  console.log(loginInput.value); //콘솔창에 사용자가 input란에 입력한 값이 뜬다.
}

loginForm.addEventListener("submit", onLoginSubmit); //submit event
