                //  *******************************Q#1*******************************
// var ascii=prompt("Enter Value To Check Is It Number or Alphabet");
// if(ascii>=48 && ascii<=57){
//     alert("Entered Value is Number!")
// }
// else{
//     alert("Dont Know!")
// }


                //  *******************************Q#2*******************************
var num1=+prompt("Enter First Number");
var num2=+prompt("Enter First Number");
if(num1>num2 ){
    alert(`${num1} is greater`)
}
else if(num2>num1 ){
    alert(`${num2} is greater`)
}
else if(num1==num2 ){
    alert(`Number is Equal`)
}
else{
    alert("Try Again!")
}


                //  *******************************Q#3*******************************
                var num=+prompt("Enter Number To Check Is it Positive and Negative ");
                if(num>0 ){
                    alert(`${num} is Positive`)
                }
                else if(num<0 ){
                    alert(`${num} is Negative`)
                }
                else if(num==0 ){
                    alert(`Number is Zero`)
                }
                else{
                    alert("Try Again!")
}

                //   *******************************Q#4*******************************
var character=prompt("Enter Alphabet To Check the Alphabet is Vowle or Consonant");
if(character==="a" || character==="e" || character=="i" || character=="o" || character=="u" ){
   alert("Value is Vowel!") 
}
else{
    alert("Value is Consonant!")
}

// ********************************************Q#5********************************************

var signuppassword=prompt("Enter Password for signup");
alert("Signup Sucessfully");
var loginpassword=prompt("Enter Password for login");
if(signuppassword===loginpassword){
    alert("login Sucessfully!");
}
else if(loginpassword===""){
    alert("Enter Password!");
} 
else if(loginpassword!==signuppassword){
    alert("Incorrect Password!");
}

// ********************************************Q#6********************************************

var hour =prompt("Enter Time")

if (hour >=20 && hour <=5 ) {
alert ("Good Night!");}
else if (hour >=6 && hour <=11 ) {
    alert ("Good Morning!");}
    else if (hour >=12 && hour <=15 ) {
        alert  ("Good After Noon!");}
        else if (hour >=16 && hour <=19 ) {
            alert  ("Good Evening!");}


// ********************************************Q#7********************************************
 
var time=prompt("Enter Time");
if(time>=0 && time<12 ){
    alert("Good Morning")

}

else if(time>=12 && time<=17 ){
    alert("Good After Noon")

}
else if(time>=17 && time<=21 ){
    alert("Good Evening")

}
else if(time>=21 && time<=24 ){
    alert("Good Night")

}