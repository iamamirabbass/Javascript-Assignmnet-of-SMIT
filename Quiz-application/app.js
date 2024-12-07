// let saved_user={};
// function signup(){
//     var user_name=document.getElementById('username')
//     var user_email=document.getElementById('email')
//     var user_password=document.getElementById('password') 
//     // console.log(`User Name:${user_name.value}`)
// }

// saved_user={
//     name:user_name.value,
//     email:user_email.value,
//     password:user_password.value,

// }
// function login(){
//     var login_user_email=document.getElementById('email')
//     var login_user_password=document.getElementById('password')
//     if(saved_user.email===login_user_email.value&&saved_user.password===login_user_password.value)
//         {
//         window.location.assign("welcomescreen.html")
//     } 
// }

let saved_user = {}; // Global object to store user data

function signup() {
    var user_name = document.getElementById('username').value;
    var user_email = document.getElementById('email').value;
    var user_password = document.getElementById('password').value;

    // Save user details into the global `saved_user` object
    saved_user = {
        name: user_name,
        email: user_email,
        password: user_password,
    };

    alert("Signup successful!");
    
}

function login() {
    var login_user_email = document.getElementById('email').value;
    var login_user_password = document.getElementById('password').value;

    // Compare login credentials with the saved user data
    if (
        saved_user.email === login_user_email &&saved_user.password === login_user_password
    ) {
        alert("Login successful!");
        window.location.assign("welcomescreen.html");
        document.getElementById("welcomeuser").innerHTML = saved_user.name;
    } else {
        alert("Invalid email or password!");
    }
}   

// redirectto quiz subject2
function course_join(){
    window.location.assign("coursesscreen.html")
}

function start(){
    window.location.assign("main-screen.html")
}



    