console.log("hello! sign in: test12@gmail.com, pw: theironyard")
var login = document.querySelector('#siButton');
var email = document.querySelector('#siEmail');
var password = document.querySelector('#sIPsw');


login.addEventListener('click', ()=> {
  var data = {
    email: email.value,
    password: password.value
  }
console.log(data)
  fetch('/users/sign_in', {
  body: JSON.stringify({user: data}),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
      sessionStorage.setItem('email', response.email)
      sessionStorage.setItem('auth_token', response.auth_token)
      //console.log(response)
      window.location.href= '/home'
  });
});
