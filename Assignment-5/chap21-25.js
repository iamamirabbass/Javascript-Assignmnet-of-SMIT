// // *****************************************************Qno1*****************************************************

<<<<<<< HEAD
// var first_name=prompt("Enter First Name");
// var last_name=prompt("Enter Last Name");

// var user_name=first_name+last_name;
// document.write(`Your Name is    ${user_name}!`)


// // *****************************************************Qno2*****************************************************
// var user_favourite_mobile=prompt("Enter Your Favourite Mobile Phone!");//take input

// var mobile_lenght=user_favourite_mobile.length;//make a mobile lenght variable 
=======
var first_name = prompt("Enter First Name");
var last_name = prompt("Enter Last Name");

var user_name = first_name + last_name;
document.write(`Your Name is    ${user_name}!`)


// *****************************************************Qno2*****************************************************
var user_favourite_mobile = prompt("Enter Your Favourite Mobile Phone!");//take input

var mobile_lenght = user_favourite_mobile.length;//make a mobile lenght variable 
>>>>>>> d8c970323e131de5355db62b537598857c141466

// document.write(`Your Favourite Mobile Phone is ${user_favourite_mobile} <br> 

// Lenght of String is ${mobile_lenght}
// `)//print 


// // *****************************************************Qno3*****************************************************

<<<<<<< HEAD
// var counry_name="Pakistan";

// var finding_n=counry_name.indexOf("n");
// alert(finding_n);



// // *****************************************************Qno4*****************************************************
// var word="Hello World";
// var finding_l=word.lastIndexOf("l");
// alert(finding_l);
=======
var counry_name = "Pakistan";

var finding_n = counry_name.indexOf("n");
alert(finding_n);



// *****************************************************Qno4*****************************************************
var word = "Hello World";
var finding_l = word.lastIndexOf("l");
alert(finding_l);
>>>>>>> d8c970323e131de5355db62b537598857c141466



// // *****************************************************Qno5*****************************************************

<<<<<<< HEAD
// var country_name="Pakistan";
// var find_word=country_name.charAt(3);
// alert(find_word);
=======
var country_name = "Pakistan";
var find_word = country_name.charAt(3);
alert(find_word);
>>>>>>> d8c970323e131de5355db62b537598857c141466


// // *****************************************************Qno6*****************************************************


<<<<<<< HEAD
// var user_first_name=prompt("Enter Your First Name");
// var user_last_name=prompt("Enter Your Second  Name");

// var user_full_name=user_first_name.concat(user_last_name);
// alert(`Your Name is  ${" "+user_full_name}!`);
=======
var user_first_name = prompt("Enter Your First Name");
var user_last_name = prompt("Enter Your Second  Name");

var user_full_name = user_first_name.concat(user_last_name);
alert(`Your Name is  ${" " + user_full_name}!`);
>>>>>>> d8c970323e131de5355db62b537598857c141466

// // *****************************************************Qno7*****************************************************


<<<<<<< HEAD
// var city_1="Hyderabad";
// var city_2=city_1.replace("Hyder","Islam");
// alert(city_2);
=======
var city_1 = "Hyderabad";
var city_2 = city_1.replace("Hyder", "Islam");
alert(city_2);
>>>>>>> d8c970323e131de5355db62b537598857c141466


// // *****************************************************Qno8*****************************************************

<<<<<<< HEAD
// var message= "Ali and Sami are best friends. They play cricket and football together.";
// var updted_message= message.replaceAll("and","&");
=======
var message = "Ali and Sami are best friends. They play cricket and football together.";
var updted_message = message.replaceAll("and", "&");
>>>>>>> d8c970323e131de5355db62b537598857c141466

// alert(updted_message);

// // *****************************************************Qno9*****************************************************

<<<<<<< HEAD
// var num="472";
// var updted_num=parseInt(num);
// document.write(`Value ${num} <br> 
// Type ${typeof(num)}<br>
// value ${num}<br>
// Type ${typeof(updted_num)}
// `)
=======
var num = "472";
var updted_num = parseInt(num);
document.write(`Value ${num} <br> 
Type ${typeof (num)}<br>
value ${num}<br>
Type ${typeof (updted_num)}
`)
>>>>>>> d8c970323e131de5355db62b537598857c141466


// // *****************************************************Qno10*****************************************************

// var user_input=prompt("Enter The word You Want to convert into upper case");
// var updted_word=user_input.toUpperCase();
// alert(updted_word);


// // *****************************************************Qno11*****************************************************
// var user_input=prompt("Enter The word You Want to convert into Tittle case");
// var first_letter=user_input[0].toUpperCase();
// var last=user_input.slice(1).toLowerCase();
// updted_word=first_letter+last;
// alert(updted_word);


// // *****************************************************Qno12*****************************************************
// var  num=35.36;
// document.write(typeof(num));
// var num_type=num.toString();
// document.write(typeof(num_type));
// var updated_num = num_type.replace(".","");
// document.write(updated_num);

// // *****************************************************Qno13*****************************************************
// var user_name=prompt("Enter User Name");
// var incorrect=false;
// for (var i=0;i<=user_name.length;i++){
// if (user_name.charCodeAt()===33||user_name.charCodeAt()==44||user_name.charCodeAt()==46||user_name.charCodeAt()==64)
//     {incorrect=true;
// }

// }
// if (incorrect){
// alert("Please Enter Valid Password");

// }
// else{
// alert("Password Sucessfully Generated!")

// }

// // *****************************************************Qno14*****************************************************
// var bakery=["cake","apple pie","cookie","chips","patties"];
// var user_item=prompt("What do you want To Order?")
// var foundit=false;
// var index;
// for(var i=0;i<=bakery.length;i++){
//     if(user_item.toLowerCase()===bakery[i]){
//         foundit=true;
//         index=i;
//     }
// }
// if (foundit){
//     alert(user_item+" Available at Index "+index)
// }
// else{
//     alert(user_item+" not available")
// }

// // *****************************************************Qno15*****************************************************

// var user_pass=prompt("Enter Password");
// var correct_pass=false;

// for (var i=0;i<=user_pass.length;i++){
// if ((user_pass.charCodeAt() >=48&&user_pass.charCodeAt()<=57)&&(user_pass.charCodeAt()>=65&&user_pass.charCodeAt()<=90||user_pass.charCodeAt()>=97&&user_pass.charCodeAt()<=122)&&(user_pass.charCodeAt()[0]!=48&&user_pass.charCodeAt()<=57)&&user_pass.length>=6){
//     correct_pass=true;
// }
// }
// if(correct_pass){
//     alert("Password Sucessfully Generated!")
// }
// else{
//     alert("Please Enter Valid Password!")
// }



// // *****************************************************Qno16*****************************************************

// var university="University of karachi";
// var updated_uni=university.split('');
// for (var i=0;i<updated_uni.length;i++){
//     document.write(updated_uni[i]+"<br>");
// }


// // *****************************************************Qno17*****************************************************
// var user_name=prompt("Enter The Word");
// var last_word=user_name.length-1;
// var output=user_name[last_word];
// alert(output); 



// // *****************************************************Qno18*****************************************************

// var text= "the quick brown fox jumps over the lazy dog";    

// var word_count=[];
// for(var i=0;i<text.length;i++){
//     if(text[i]==="t"){
//         word_count[++1];
//     }

// }

// alert(word_count)

<<<<<<< HEAD


// *****************************************************Qno11*****************************************************

// var current_time = new Date();
// var hour_ago = new Date(current_time.setHours(current_time.getHours() - 1))
// document.write(`Current Date: ${new Date()}<br>

//     1 hour ago it was: ${hour_ago}

//     `)



// *****************************************************Qno12*****************************************************

// var current_Date = new Date();
// alert(current_Date);
// var back_100yrs = new Date(current_Date.setFullYear(current_Date.getFullYear() - 100))
// document.write(back_100yrs)



// *****************************************************Qno13*****************************************************

// var user_dob=prompt("Enter Your Birth Year");
// var user_age=new Date().getFullYear()-user_dob;
// document.write(`Your Age IS: ${user_age}` )
=======
var user_input = prompt("Enter The word You Want to convert into upper case");
var updted_word = user_input.toUpperCase();
alert(updted_word);


// *****************************************************Qno11*****************************************************
var user_input = prompt("Enter The word You Want to convert into Tittle case");
var first_letter = user_input[0].toUpperCase();
var last = user_input.slice(1).toLowerCase();
updted_word = first_letter + last;
alert(updted_word);


// *****************************************************Qno12*****************************************************
var num = 35.36;
document.write(typeof (num));
var num_type = num.toString();
document.write(typeof (num_type));
var updated_num = num_type.replace(".", "");
document.write(updated_num);

// *****************************************************Qno13*****************************************************
var user_name = prompt("Enter User Name");
var incorrect = false;
for (var i = 0; i <= user_name.length; i++) {
    if (user_name.charCodeAt() === 33 || user_name.charCodeAt() == 44 || user_name.charCodeAt() == 46 || user_name.charCodeAt() == 64) {
        incorrect = true;
    }

}
if (incorrect) {
    alert("Please Enter Valid Password");

}
else {
    alert("Password Sucessfully Generated!")

}

// *****************************************************Qno14*****************************************************
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var user_item = prompt("What do you want To Order?")
var foundit = false;
var index;
for (var i = 0; i <= bakery.length; i++) {
    if (user_item.toLowerCase() === bakery[i]) {
        foundit = true;
        index = i;
    }
}
if (foundit) {
    alert(user_item + " Available at Index " + index)
}
else {
    alert(user_item + " not available")
}

// *****************************************************Qno15*****************************************************

var user_pass = prompt("Enter Password");
var correct_pass = false;

for (var i = 0; i <= user_pass.length; i++) {
    if ((user_pass.charCodeAt() >= 48 && user_pass.charCodeAt() <= 57) && (user_pass.charCodeAt() >= 65 && user_pass.charCodeAt() <= 90 || user_pass.charCodeAt() >= 97 && user_pass.charCodeAt() <= 122) && (user_pass.charCodeAt()[0] != 48 && user_pass.charCodeAt() <= 57) && user_pass.length >= 6) {
        correct_pass = true;
    }
}
if (correct_pass) {
    alert("Password Sucessfully Generated!")
}
else {
    alert("Please Enter Valid Password!")
}
>>>>>>> d8c970323e131de5355db62b537598857c141466


// // *****************************************************Qno14*****************************************************

<<<<<<< HEAD
// var customer_name=prompt("Enter Your Name");
// var current_month=prompt("Enter Current Month");
// var units=+prompt("Enter Number Of Units");
// var per_unit=+prompt("Charges Per Unit");
// var net_amount=units*per_unit;
// var late_charges=350;
// var late_amount=net_amount+late_charges;


// document.write(`Customer Name: ${customer_name}<br>
//     Month: ${current_month}<br>
//     Number Of Units: ${units}<br>
//     Charges Per Unit: ${per_unit}<br>
//     <br>
//     Net Amount Payable (within Due Date): ${net_amount}<br>
//     Late Payment Surcharge: ${late_charges}<br>
//     Gross Amount Payable (After Due Date): ${late_amount}<br>

//     `)
=======
// *****************************************************Qno16*****************************************************

var university = "University of karachi";
var updated_uni = university.split('');
for (var i = 0; i < updated_uni.length; i++) {
    document.write(updated_uni[i] + "<br>");
}


// *****************************************************Qno17*****************************************************
var user_name = prompt("Enter The Word");
var last_word = user_name.length - 1;
var output = user_name[last_word];
alert(output);



// *****************************************************Qno18*****************************************************

var text = "the quick brown fox jumps over the lazy dog";

var word_count =0;
for (var i = 0; i < text.length; i++) {
    if (text[i] === "the") {
        word_count[1++];
    }

}

alert(word_count)
>>>>>>> d8c970323e131de5355db62b537598857c141466
