<<<<<<< HEAD
// var random_values="qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM";
// var random_pass='';
// for(var i=0;i<10;i++){
//     var randomnum=Math.floor(Math.random()*random_values.length);
//     random_pass+=random_values[randomnum]
// }
// document.write(random_pass);
=======
function generate_password(){

    var random_values="qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM";
var random_pass='';
for(var i=0;i<10;i++){
    var randomnum=Math.floor(Math.random()*random_values.length);
    random_pass+=random_values[randomnum]
}

document.getElementById('passValue').innerHTML = `<span> ${random_Pass}  </span>`

}



>>>>>>> d8c970323e131de5355db62b537598857c141466


