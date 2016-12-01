console.log("hello")
//signup
var email = document.querySelector('#suEmail')
var password = document.querySelector('#suPassword')
var api_token = sessionStorage.getItem('api_token');
var signup_path = '';
var uploadSignup = document.querySelector('#suButton')

uploadSignup.addEventListener('click', fireAjaxPost)

function fireAjaxPost() {
    var formData = {
        email: email.value,
        password: password.value,
        //add auth_token to send to rails
    }
    console.log(formData)
        fetch(signup_path,{
            body: JSON.stringify({
                formData
            }),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
        window.location.href= 'index.html.erb'
        console.log(response)
    })
    }

//sign in
//
// var login = document.querySelector('#siButton'); //May need to remove and just use Upload
// var suEmail = document.querySelector('#siEmail');
// var password = document.querySelector('#sIPsw');
//
// //Step 3 - Create function to handle signin event
// login.addEventListener('click', ()=> {
//   console.log('Press Enter to login')
//   // var formData = {
//   //   username: email.value,
//   //   password: password.value,
//   // };
//   // console.log(formData)
//   fetch('', {
//     body: JSON.stringify({
//       username: username.value,
//       password: password.value
//     }),
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//
//   .then(response => response.json())
//   .then(response => {
//
//     sessionStorage.setItem('api_token', response.user.api_token)
//     sessionStorage.setItem('user', JSON.stringify(response.user))
//     window.location.href= './event/home'
//   });
// });
