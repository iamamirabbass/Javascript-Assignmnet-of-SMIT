// *****************************************************Qno1*****************************************************

var first_name=prompt("Enter First Name");
var last_name=prompt("Enter Last Name");

var user_name=first_name+last_name;
document.write(`Your Name is    ${user_name}!`)


// *****************************************************Qno2*****************************************************
var user_favourite_mobile=prompt("Enter Your Favourite Mobile Phone!");//take input

var mobile_lenght=user_favourite_mobile.length;//make a mobile lenght variable 

document.write(`Your Favourite Mobile Phone is ${user_favourite_mobile} <br> 

Lenght of String is ${mobile_lenght}
`)//print 


// *****************************************************Qno3*****************************************************

var counry_name="Pakistan";

var finding_n=counry_name.indexOf("n");
alert(finding_n);



// *****************************************************Qno4*****************************************************
var word="Hello World";
var finding_l=word.lastIndexOf("l");
alert(finding_l);



// *****************************************************Qno5*****************************************************

var country_name="Pakistan";
var find_word=country_name.charAt(3);
alert(find_word);


// *****************************************************Qno6*****************************************************


var user_first_name=prompt("Enter Your First Name");
var user_last_name=prompt("Enter Your Second  Name");

var user_full_name=user_first_name.concat(user_last_name);
alert(`Your Name is  ${" "+user_full_name}!`);

// *****************************************************Qno7*****************************************************


var city_1="Hyderabad";
var city_2=city_1.replace("Hyder","Islam");
alert(city_2);


// *****************************************************Qno8*****************************************************

var message= "Ali and Sami are best friends. They play cricket and football together.";
var updted_message= message.replaceAll("and","&");

alert(updted_message);

// *****************************************************Qno9*****************************************************

var num="472";
var updted_num=parseInt(num);
document.write(`Value ${num} <br> 
Type ${typeof(num)}<br>
value ${num}<br>
Type ${typeof(updted_num)}
`)


// *****************************************************Qno10*****************************************************

var user_input=prompt("Enter The word You Want to convert into upper case");
var updted_word=user_input.toUpperCase();
alert(updted_word);


// *****************************************************Qno11*****************************************************
var user_input=prompt("Enter The word You Want to convert into Tittle case");
var first_letter=user_input[0].toUpperCase();
var last=user_input.slice(1).toLowerCase();
updted_word=first_letter+last;
alert(updted_word);


// *****************************************************Qno12*****************************************************
var  num=35.36;
document.write(typeof(num));
var num_type=num.toString();
document.write(typeof(num_type));
var updated_num = num_type.replace(".","");
document.write(updated_num);

// *****************************************************Qno13*****************************************************
var user_name=prompt("Enter User Name");
var incorrect=false;
for (var i=0;i<=user_name.length;i++){
if (user_name.charCodeAt()===33||user_name.charCodeAt()==44||user_name.charCodeAt()==46||user_name.charCodeAt()==64)
    {incorrect=true;
}

}
if (incorrect){
alert("Please Enter Valid Password");

}
else{
alert("Password Sucessfully Generated!")

}

// *****************************************************Qno14*****************************************************
var bakery=["cake","apple pie","cookie","chips","patties"];
var user_item=prompt("What do you want To Order?")
var foundit=false;
var index;
for(var i=0;i<=bakery.length;i++){
    if(user_item.toLowerCase()===bakery[i]){
        foundit=true;
        index=i;
    }
}
if (foundit){
    alert(user_item+" Available at Index "+index)
}
else{
    alert(user_item+" not available")
}

// *****************************************************Qno15*****************************************************

var user_pass=prompt("Enter Password");
var correct_pass=false;

for (var i=0;i<=user_pass.length;i++){
if ((user_pass.charCodeAt() >=48&&user_pass.charCodeAt()<=57)&&(user_pass.charCodeAt()>=65&&user_pass.charCodeAt()<=90||user_pass.charCodeAt()>=97&&user_pass.charCodeAt()<=122)&&(user_pass.charCodeAt()[0]!=48&&user_pass.charCodeAt()<=57)&&user_pass.length>=6){
    correct_pass=true;
}
}
if(correct_pass){
    alert("Password Sucessfully Generated!")
}
else{
    alert("Please Enter Valid Password!")
}



// *****************************************************Qno16*****************************************************

var university="University of karachi";
var updated_uni=university.split('');
for (var i=0;i<updated_uni.length;i++){
    document.write(updated_uni[i]+"<br>");
}


// *****************************************************Qno17*****************************************************
var user_name=prompt("Enter The Word");
var last_word=user_name.length-1;
var output=user_name[last_word];
alert(output); 



// *****************************************************Qno18*****************************************************

var text= "the quick brown fox jumps over the lazy dog";    

var word_count=[];
for(var i=0;i<text.length;i++){
    if(text[i]==="t"){
        word_count[++1];
    }

}

alert(word_count)
