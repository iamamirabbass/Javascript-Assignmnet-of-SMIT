// ***************************************************Q#1***************************************************
var students =[];

// ***************************************************Q#2***************************************************
var students =new Array();
// ***************************************************Q#3***************************************************
var colors;
colors=["Black","White","yellow","Blue"];

// ***************************************************Q#4***************************************************
var numbers;
numbers=[21,89,1,86,56];

// ***************************************************Q#5***************************************************
var condition;
condition=[true,false];

// ***************************************************Q#6***************************************************
var arr;
arr=["Amir",21,true,"Green",5,false];

// ***************************************************Q#7***************************************************
var education_standered_pakistan=["SCS","HSC","BSC","BS","B.COM","MS","M.Phil","PhD"];
document.write(`
    <h3>Qualification</h3>
    1) ${education_standered_pakistan[0]} <br>
    2) ${education_standered_pakistan[1]}<br>
    3) ${education_standered_pakistan[2]}<br>
    4) ${education_standered_pakistan[4]}<br>
    5) ${education_standered_pakistan[5]}<br>
    6) ${education_standered_pakistan[6]}<br>
    7) ${education_standered_pakistan[7]}<br>
     `)

     // ***************************************************Q#8***************************************************

     var students=["Sarim","Anus","Usama"];
     var marks=[420,390,350];
     var total_marks=500;
     var student_1_percentage=marks[0]/total_marks*100;
     var student_2_percentage=marks[1]/total_marks*100;
     var student_3_percentage=marks[2]/total_marks*100;

     document.write(`
        Score of ${students[0]} is ${marks[0]}. Percentage: ${student_1_percentage}%<br>
        Score of ${students[1]} is ${marks[1]}. Percentage: ${student_2_percentage}%<br>
        Score of ${students[2]} is ${marks[2]}. Percentage: ${student_3_percentage}%<br>
        `)

     // ***************************************************Q#9***************************************************


     var colors=["Orange","Green","Black","Yellow","Blue"];
     document.write(`<h4> Colors </h4><br>`);
     document.write(colors);"<br>"
     var add_color=prompt("Enter The Color You want to add in The Start of the  Array");
     colors.splice(0,0,add_color);
     document.write(`<h4> updated Colors </h4><br>`);
     document.write(colors);

     var add_end_color=prompt("Enter The Color You want to add in The End of The  Array ");
     document.write(`<h4> updated Colors </h4><br>`);
     colors.splice(6,6,add_end_color);
     document.write(colors);

     var color_1=prompt("Enter Two More Colors You want to add in The Start of The  Array (Enter 1st Color)");
     var color_2=prompt("Enter Two More Colors You want to add in The Start of The  Array (Enter 2nd Color) ");
     document.write(`<h4> updated Colors </h4><br>`);
     colors.splice(0,0,color_1,color_2);
     document.write(colors);

    colors.splice(0,1);
     document.write(`<h4> updated Colors </h4><br>`);
     document.write(colors);

    
     colors.splice(colors.length-1,1);
     document.write(`<h4> updated Colors </h4><br>`);
     document.write(colors);

     var color_index=+prompt("Enter The Index Where you want to add the color");
     var color_name=prompt("Enter The Color you want to add in the Array");
     colors.splice(color_index,0,color_name);
     document.write(`<h4> updated Colors </h4><br>`);
     document.write(colors);

     var del_index=+prompt("Enter The Index You want to Delete from the array");
     var del_index_numbers=+prompt("How many colors you wnat to delete");
     colors.splice(del_index,del_index_numbers);
     document.write(`<h4> updated Colors </h4><br>`);
     document.write(colors);



    // ***************************************************Q#10***************************************************

    var students_marks=[890,850,769,810];
    document.write(`
        ${students_marks}<br>
        ${students_marks.sort()}
        `)    
    

    // ***************************************************Q#11***************************************************

    var citis =["Karachi","Lahore","Islamabd","Abtabad","Multan","Hyderabad"];
    var selected_cities=citis.slice(1,3)
    document.write(`<h3>Cities</h3> <br>
    ${citis}
    <h3>Selected Cities</h3> <br>
    ${selected_cities}    
    `)
    


    // ***************************************************Q#12***************************************************

    var arr=["This","is","My","Car"];
    var updated=arr.join("");

    document.write(`
        <h4>Array</h4>
        ${arr}
        <h4>Join Array</h4>
        ${updated}
        `)


        // ***************************************************Q#13***************************************************
var devices=["Cpu","Monitor","keyboard","Mouse"]
document.write(`
  <h4>Devices</h4><br>  
    ${devices} <br>
    <h5>Output</h5><br>
${del=devices.shift()} <br>
<h5>Output</h5><br>
${del=devices.shift()} <br>
<h5>Output</h5><br>
${del=devices.shift()} <br>
<h5>Output</h5><br>
${del=devices.shift()} <br>
    
    `); 


// ***************************************************Q#14***************************************************

    var devices=["Cpu","Monitor","keyboard","Mouse"]
    document.write(`<h4>Devices</h4><br>
        ${devices} <br>
        <h5>Output</h5><br>
        ${del=devices.pop()} <br>
        <h5>Output</h5><br>
        ${del=devices.pop()} <br>
        <h5>Output</h5><br>
        ${del=devices.pop()} <br>
        <h5>Output</h5><br>
        ${del=devices.pop()} <br>
     `)

     
// ***************************************************Q#15***************************************************

var mobiles_brands=["Apple","Samsung","Google Pixel","Sony","Redmi","Infinix"];

document.write(`
    
   <lable> Choose Mobile Brand</lable>
    <select>
  <option ${mobiles_brands[0]}>${mobiles_brands[0]}</option>
  <option ${mobiles_brands[1]}>${mobiles_brands[1]}</option>
  <option ${mobiles_brands[2]}>${mobiles_brands[2]}</option>
  <option ${mobiles_brands[3]}>${mobiles_brands[3]}</option>
</select
    `)