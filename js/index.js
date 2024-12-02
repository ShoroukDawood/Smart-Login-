var emailInp = document.querySelector('#signin-email');
var passInp = document.querySelector('#signin-pass');
var buttonLogin = document.querySelector('#submit-login');
var loginErrorMessages = document.querySelector('#loginErrorMessages');
var userLogin = {};

buttonLogin.addEventListener('click', function (e) {
    e.preventDefault();

    user = {
        email: emailInp.value.trim(), 
        pass: passInp.value.trim()
    };

    console.log(user); 

    var storageUser = JSON.parse(localStorage.getItem('user'));
    console.log("Retrieved user:", storageUser);

    if (storageUser) {
        if (user.email === storageUser.email || user.pass === storageUser.pass) {
            window.location.href = "./home.html";
        } else {
            loginErrorMessages.innerHTML = "<p>Invalid username or password. Please try again.</p>"; 
        }
    } else {
        loginErrorMessages.innerHTML = "<p>No User Found</p>"; 
    }
});

function clearInputs() {
    emailInp.value = "";
    passInp.value = "";
}
