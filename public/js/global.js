console.log("hello! sign up here")
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
        fetch('/users',{
            body: JSON.stringify({user: formData}),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            sessionStorage.setItem('email', response.user.email)
            sessionStorage.setItem('auth_token', response.user.authentication_token)
            sessionStorage.setItem('user', JSON.stringify(response.user))

            window.location.href= '/home'
        })
    }
