var emailInp = document.querySelector('#signin-email');
var passInp = document.querySelector('#signin-pass');
var buttonLogin = document.querySelector('#submit-login');
var loginErrorMessages = document.querySelector('#loginErrorMessages');
var userLogin = {};

buttonLogin.addEventListener('click', function (e) {
    e.preventDefault();

    user = {
        email: emailInp.value.trim(), // إزالة المسافات
        pass: passInp.value.trim() // إزالة المسافات
    };

    console.log(user); // عرض المدخلات في الكونسول

    // استرجاع المستخدم من localStorage
    var storageUser = JSON.parse(localStorage.getItem('user'));
    console.log("Retrieved user:", storageUser); // عرض البيانات المسترجعة من localStorage

    if (storageUser) {
        // مقارنة المدخلات مع البيانات المخزنة في localStorage
        if (user.email === storageUser.email && user.pass === storageUser.pass) {
            window.location.href = "./home.html"; // الانتقال للصفحة الرئيسية
        } else {
            loginErrorMessages.innerHTML = "<p>Invalid username or password. Please try again.</p>"; // عرض رسالة الخطأ
        }
    } else {
        loginErrorMessages.innerHTML = "<p>No User Found</p>"; // في حالة عدم وجود بيانات مستخدم في localStorage
    }
});

function clearInputs() {
    emailInp.value = "";
    passInp.value = "";
}
