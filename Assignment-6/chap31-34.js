// ************************************************************QNO1*****************************************************
// var current_date= new Date();
// alert(current_date);

// ************************************************************QNO2*****************************************************
// var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var current_month= new Date().getMonth();
// alert(months[current_month]);



// ************************************************************QNO3*****************************************************
// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var current_day=new Date().getDay();
// alert("Today is "+days[current_day]);


// ************************************************************QNO4*****************************************************


// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// var current_day=new Date().getDay();
// if(current_day===0)
//     {
// alert("Today Is Fun Day!")
// }

// else if(current_day===6)
//     {
// alert("Today Is Fun Day!")
// }
// else{
//     alert("Today is "+days[current_day])
// }



// ************************************************************QNO5*****************************************************
// var current_date=new Date().getDate();
// if(current_date<=15){
//     document.write("First Fifteen Days of The Month!")
// }
// else{
//     document.write("last Fifteen Days of The Month!")
// }



// ************************************************************QNO6*****************************************************
// var current_time=new Date().getTime();
// var convertion=1000*60*60
// var total_min=current_time/convertion;
// document.write(`Current Date: ${new Date()}<br>`)
// document.write(`Elapsed milliseconds since January 1, 1970: ${new Date().getTime()}<br>`)
// document.write(`Elapsed minutes since January Psed 1, 1970: ${total_min}<br>`);



// ************************************************************QNO7*****************************************************

// var hour=new Date().getHours();
// if(hour<=12){
//     alert("It's AM")
// }

// else{
//     alert("It's PM")
// }


// ************************************************************QNO8*****************************************************

// var later_date=new Date("December 31, 2020")
// document.write("Later Date: "+later_date);



// ************************************************************QNO9*****************************************************

// var ramadan_2015=new Date("June 18, 2015");
// var passed_days=new Date()-ramadan_2015;
// var convertion=1000*60*60*24;
// document.write(`<b> ${Math.floor(passed_days/convertion)}</b> days have passed since 1st Ramadan, 2015`)