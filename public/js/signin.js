console.log("hello! sign in here test12")

var login = document.querySelector('#siButton');
var email = document.querySelector('#siEmail');
var password = document.querySelector('#sIPsw');
var api_auth = sessionStorage.getItem('authentication_token');
var storedEmail = sessionStorage.getItem('email');


login.addEventListener('click', ()=> {
  var data = {
    email: email.value,
    password: password.value
  }

  fetch('/users/sign_in', {
  body: JSON.stringify({user: data}),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
      sessionStorage.setItem('api_auth', response.authentication_token)
      sessionStorage.setItem('storedEmail', response.email)
      sessionStorage.setItem('user', JSON.stringify(response.user))
      window.location.href= '/'
  });
});
