// Qno1
var a =+prompt("Enter Value");
document.write("The Value of a is "+a+"<br>");
++a;
document.write("The Value of a after ++a "+a+"<br>");
document.write("The Value of a after a++ is "+a+++"<br>");
document.write("Now the Value of  a is "+a+"<br>");
document.write("The Value of a after --a is "+--a+"<br>");
document.write("Now the Value of  a is "+a+"<br>");
document.write("The Value of a after a-- is "+a--+"<br>");
document.write("Now the Value of  a is "+a+"<br>");

// Qno2
var a=2;
var b=1;
result=--a;
document.write(`The Variable of --a =${result} <br>`)

var a=2;
var b=1;
result=--a - --b;
document.write(`The Variable of --a - --b =${result} <br>`)

var a=2;
var b=1;
result= --a - --b + ++b;
document.write(`The Variable of --a - --b + ++b =${result} <br>`)


var a=2;
var b=1;
result= --a - --b + ++b + b--;
document.write(`The Variable of --a - --b + ++b + b-- =${result} <br>`)


// Qno3
var user_name=prompt("Enter Your Name");
alert("Have A Great Day "+user_name+"!");

// Qno4

var num=+prompt("Enter Number To Display Multiplication Table ",5);
document.write(num+" X 1 = "+num*1+"<br>");
document.write(num+" X 2 = "+num*2+"<br>");
document.write(num+" X 3 = "+num*3+"<br>");
document.write(num+" X 4 = "+num*4+"<br>");
document.write(num+" X 5 = "+num*5+"<br>");
document.write(num+" X 6 = "+num*6+"<br>");
document.write(num+" X 7 = "+num*7+"<br>");
document.write(num+" X 8 = "+num*8+"<br>");
document.write(num+" X 9 = "+num*9+"<br>");
document.write(num+" X 10 = "+num*10+"<br>");

// Qno5

var sub_one=prompt("Enter Subject One");
var sub_one_marks=+prompt("Enter Obtained Marks in "+sub_one);
var sub_two=prompt("Enter Subject Two");
var sub_two_marks=+prompt("Enter Obtained Marks in "+sub_two);
var sub_three=prompt("Enter Subject Three");
var sub_three_marks=+prompt("Enter Obtained Marks in "+sub_three);
var total_marks=100;
var total_obtained_marks=sub_one_marks+sub_two_marks+sub_three_marks;
var percentage=total_obtained_marks/total_marks*100;

document.write(`
    
    <table>
    <tr>
       <th>Subjects</th>
      <th>Obtaied Mraks</th>
      <th>Total Marks</th>
    </tr>
    <tr>
      <td>${sub_one}</td>
      <td>${sub_one_marks}</td>
      <td>${total_marks}</td>
    </tr>
    <tr>
      <td>${sub_two}</td>
      <td>${sub_two_marks}</td>
      <td>${total_marks}</td>
    </tr>
    <tr>
      <td>${sub_three}</td>
      <td>${sub_three_marks}</td>
      <td>${total_marks}</td>
    </tr>
    
    <tr>
    <td> Total Marks: ${total_marks}</td>
    <td> Total Obtained Marks: ${total_obtained_marks}</td>
    <td> Percentage: ${percentage}</td>
    </tr>
    </table>
    `)