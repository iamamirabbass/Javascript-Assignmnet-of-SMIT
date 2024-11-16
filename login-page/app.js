function authentication(){
    var username=document.getElementById('username')
    var password=document.getElementById('password')
    if (username ||password ==="admin"){
        console.log(`User Name: ${username.value}`)
        console.log(`Password: ${password.value}`)
    }
    else{
        console.log("Wrong Pasword")
    }
}