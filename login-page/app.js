function authentication(){
    var username=document.getElementById('username')
    var password=document.getElementById('password')
    if (username.value && password.value =="admin"){
        // console.log(`User Name: ${username.value}`)
        // console.log(`Password: ${password.value}`)

        window.location.assign("https://amir-smit-js.netlify.app/saylani%20form/")
    }
    else{
        alert("Please Enter Correct Password")
    }
}