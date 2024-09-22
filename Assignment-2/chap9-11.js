// Qno1
var city=prompt("Enter Your City Name");
if(city==="Karachi"){
    alert("Welcome To City of lightes❤")
}
 else if(city==="karachi") {
    alert("Welcome To City of lightes❤")
}
else{
    alert("NAN")
}

// Qno2
var gender=prompt("Enter Your Gender");
if(gender==="Male"){
    alert("Good Morning Sir!")
}
if(gender==="Female"){
    alert("Good Morning Mam!")
}

// Qno3
var color=prompt("🚦Enter Signal Color");
if (color==="red"){
    alert("Must Stop!")
}
else if (color==="yellow"){
    alert("Ready To Move!")
}
else if (color==="green"){
    alert("Move Now!")
}

// Qno 4

var fuel=+prompt("Enter Your Remaining Fuel")
if(fuel<=0.25){
    alert("Please refill the fuel in your car")
}
else{
    alert("You car have enough fuel for traveling")
}


// Qno5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
    }


// Qno6

var sub1_marks=+prompt("Enter your marks in Subject One");
var sub2_marks=+prompt("Enter your marks in Subject Two");
var sub3_marks=+prompt("Enter your marks in Subject Three");
var total_marks=300;
var total_obtained_marks=sub1_marks+sub2_marks+sub3_marks;
result=total_obtained_marks/total_marks*100;
document.write(`
    <h2> Marks Sheet</h2><br>
    <b>Total Marks: </b>${total_marks}<br>
    <b> Marks Obtained: </b>${total_obtained_marks}<br>
    <b> Percentage: </b>${result}%<br>
    `)
if (result>=80){
    document.write(`<b>Grade:</b> A-one<br> <b>Remarks:</b> Excellent`)
}
else if(result>=70){
    document.write(`<b>Grade:</b> A<br> <b>Remarks:</b> Good`)
}
else if(result>=60){
    document.write(`<b>Grade:</b> B<br> <b>Remarks:</b> You Need To improve`)
}
else{
    document.write(`<b>Grade:</b> Fail<br> <b>Remarks:</b> Sorry`)
}



// Qno7

var num=+prompt("Guess The Secret Number ");
var secret_number=5;
if(num===secret_number){
    alert(`Bingo! Correct Answer`)
}

else if (num===++secret_number){
    alert(`Close enough to the correct answer.`)
}

else{
    alert(`Wrong Number!`)
    
}


// Qno8

var num=+prompt("Enter Number To Check the number is divisible by 3. ");

if (num%3===0){
    alert("Number is Divisible By 3")
}
else{
    alert("Number is Not Divisible By 3")
    
}

// Qno9

var num=+prompt("Enter Number To Check the number is Even or Odd. ");

if (num%2===0){
    alert("Number is Even")
}
else{
    alert("Number is Odd")
    
}


// Qno 10

var temp=+prompt("Enter Tempreature ");

if (temp>40){
    alert("It is too hot outside.")
}
else if (temp>30){
    alert("The Weather today is Normal.")
    
}
else if (temp>30){
    alert("Today’s Weather is cool.")
    
}
else(temp>10)
{
    alert("OMG! Todays weather is so Cool")
    
}


// Qno11
var num1=+prompt("Enter Number 1");
var num2=+prompt("Enter Number 2");
var operator=prompt("Enter Operator You Want to preform");
if(operator==="+"){
    document.write(`<b>Ans:</b>${num1+num2}`)
}
else if(operator==="-"){
    document.write(`<b>Ans:</b>${num1-num2}`)
}
else if(operator==="*"){
    document.write(`<b>Ans:</b>${num1*num2}`)
}
else(operator==="/")
{
    document.write(`<b>Ans:</b>${num1/num2}`)
} 