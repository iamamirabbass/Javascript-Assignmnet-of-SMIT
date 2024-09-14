// Qno 1
var num1=5;
var num2=4;
sum=num1+num2;
document.write("Sum of "+num1+" and "+num2+" is "+sum+"<br>");

// // Qno 2

sub=num1-num2;
document.write("Subtraction of "+num1+" and "+num2+" is "+sub+"<br>");

multi=num1*num2;
document.write("Multiplication of "+num1+" and "+num2+" is "+multi+"<br>");

Division=num1/num2;
document.write("Division of "+num1+" and "+num2+" is "+Division+"<br>");

// // Qno 3

var number;
document.write("Value after variable declaration is:"+number+"<br>");
number=5;
document.write("Initialvalue:"+number+"<br>");
number=++number;
document.write("Value after increment is:"+number+"<br>");
number=number+7;
document.write("Value after increment of 7 is :"+number+"<br>");
number=--number;
document.write("Valueafter decrement is:"+number+"<br>");
number=number/3;
document.write("The Reminder is:"+number+"<br>");



// // Qno4

var ticket_price=600;
var qty=+prompt("Enter the Tickets Quantity");
var total= ticket_price*qty;
document.write("Total Price of "+qty+"Tickets is "+total+"<br>");

// // Qno5

var multiplication_num=+prompt("Enter the Number You want Display Multiplication Table ")
document.write("Table Of "+multiplication_num+" is =<br>");

document.write(multiplication_num+" X 1 ="+multiplication_num*1+"<br>");
document.write(multiplication_num+" X 2 ="+multiplication_num*2+"<br>");
document.write(multiplication_num+" X 3 ="+multiplication_num*3+"<br>");
document.write(multiplication_num+" X 4 ="+multiplication_num*4+"<br>");
document.write(multiplication_num+" X 5 ="+multiplication_num*5+"<br>");
document.write(multiplication_num+" X 6 ="+multiplication_num*6+"<br>");
document.write(multiplication_num+" X 7 ="+multiplication_num*7+"<br>");
document.write(multiplication_num+" X 8 ="+multiplication_num*8+"<br>");
document.write(multiplication_num+" X 9 ="+multiplication_num*9+"<br>");
document.write(multiplication_num+" X 10 ="+multiplication_num*10+"<br>");

// // Qno6
var celcius_temp=+prompt("Enter The Tempreature In Celcius");
var feren_temp=celcius_temp*9/5+32;
document.write(celcius_temp+"C "+" is "+feren_temp);

var ferenheit=+prompt("Enter The Tempreature In Ferenheit")
var Celcius=ferenheit-32*5/9;
document.write(ferenheit+"F "+" is "+Celcius);

// Qno7
var product_1_price=+prompt("Price of item 1");
var product_2_price=+prompt("Price of item 2");

var qty_of_item1=+prompt("Quantity Of Item 1");
var qty_of_item2=+prompt("Quantity Of Item 2");

var item_1total=product_1_price*qty_of_item1;
var item_2total=product_2_price*qty_of_item2;

var total=item_1total+item_2total+100;
document.write("Price of item 1 is:"+product_1_price+"<br>");
document.write("Quantity of item 1 is:"+qty_of_item1+"<br>");
document.write("Price of item 2 is:"+product_2_price+"<br>");
document.write("Quantity of item 2 is:"+qty_of_item2+"<br>");
document.write("Shipping Charges: 100"+"<br>");
document.write("Total Order: "+total+"<br>");


// // Qno8
document.write("Marks Sheet");

var total_marks=+prompt("Enter Total Marks");
var obtained_marks=+prompt("Enter Obtained Marks");
var percentage=obtained_marks/total_marks*100;
document.write("Percentage is : "+percentage+"<br>");


// Qno9
var _1usd=104.80;
var _1riyal=28;
var usd=+prompt("Enter Total USD");
var riyal=+prompt("Enter Total Riyal");
var total_usd=_1usd*usd;
var total_riyal=_1riyal*riyal;
var total_currency=total_riyal+total_usd;
document.write("Total Currency in PKR : "+total_currency+"<br>");


// Qno10
var number_1 =10;

number_1=number_1+5*10/2;
document.write("Result is : "+number_1+"<br>");

// Qno11
document.write("Age Calculator<br>");
var current_year=+prompt("Enter Current Year")
var dob=+prompt("Enter Date of Birth")
 var age=current_year-dob;
 document.write("Your Age is "+age+"<br>");

//  qno12
var radius=+prompt("Enter The Radius of the Circle")
var circumference_of_circle=2*3.14*radius;
var area =3.14*radius*radius;
document.write("Radius of Circle is "+radius+"<br>")
document.write("Circumference of Circle is "+circumference_of_circle+"<br>");
document.write("Ares of Circle is "+area+"<br>")


// Qno13

var snack=+prompt("Enter Your Favourite Snack")
var current_age=+prompt("Enter Your Current Age");
var maximum_age=+prompt("Enter Your Maximum Age");
var estimated_amount=+prompt("Enter Your Astimated Amount Per Day");
var lifetime=maximum_age-current_age*estimated_amount;
document.write("Your Favourite snack is  "+snack+"<br>")
document.write("Your Current age  is "+age+"<br>")
document.write("Your Maximum age is "+maximum_age+"<br>")
document.write("Amount of Snack per Day is  "+estimated_amount+"<br>")
document.write("You Will need "+lifetime+snack+"To last your until the riped old age"+maximum_age+"<br>")
