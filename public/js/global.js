console.log("hello! sign up here")
//signup

var signup_path = '/users';
var uploadSignup = document.querySelector('#suButton')

uploadSignup.addEventListener('click', fireAjaxPost)

function fireAjaxPost() {
    var email = document.querySelector('#suEmail')
    var password = document.querySelector('#suPassword')
    var password_confirmation = document.querySelector('#suConfirmPassword')
    var formData = {
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
    }
    console.log(formData)
        fetch(signup_path,{
            body: JSON.stringify({user: formData}),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            sessionStorage.setItem('email',response.email)
            sessionStorage.setItem('authentication_token',response.authentication_token)
             window.location.href= '/home'
        })
    }
