console.log("hello! sign in here test12")
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
      sessionStorage.setItem('authentication_token', response.authentication_token)
       window.location.href= '/home'
  });
});
