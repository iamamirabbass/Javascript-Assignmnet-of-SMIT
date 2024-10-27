// *****************************************************Qno1*****************************************************
var user_input=+prompt("Enter Positive Positive Value");
document.write(` Value: ${user_input}<br>
    
    Round OF: ${Math.round(user_input)}<b
    r>
Floor: ${Math.floor(user_input)}<br>
Ceil: ${Math.ceil(user_input)}<br>

`
);

// *****************************************************Qno2*****************************************************
var user_input=+prompt("Enter Negative Integer  Value");
document.write(` Value: ${user_input}<br>
    
    Round OF: ${Math.round(user_input)}<br>
Floor: ${Math.floor(user_input)}<br>
Ceil: ${Math.ceil(user_input)}<br>
`);

// *****************************************************Qno3*****************************************************

var user_input=+prompt("Enter the Value");
var absolute_value=Math.abs(user_input);
alert(absolute_value);



// *****************************************************Qno4*****************************************************
var random=Math.floor(Math.random()*6)+1;
var random_value=random.toFixed(0);
document.write(`Random Dice Value is ${random_value}`);


// *****************************************************Qno5*****************************************************

var random=Math.floor(Math.random()*2)+1;
var random_value=random.toFixed(0);
if(random_value==1){
    document.write(`${random_value} Random Coin Value Head`);

}
else{
    document.write(`${random_value} Random Coin Value Tail`);

}


// *****************************************************Qno6*****************************************************

var random=Math.floor(Math.random()*100)+1;
var random_value=random.toFixed(0);
document.write(`Random  Value is ${random_value}`);



// *****************************************************Qno7*****************************************************

var user_weight=prompt("Enter Your Weight In Kilograms");

var result=parseFloat(user_weight);
alert("You Weight Is "+result+"Kilogram");




// *****************************************************Qno8*****************************************************

var seceret_num=Math.floor(Math.random()*6)+1;
var user_input=+prompt("Enter Any Number To Check");
if(user_input===seceret_num){
    alert("Congratulation You are the Winner!")
}
else{
    alert("Try Again!")
}
