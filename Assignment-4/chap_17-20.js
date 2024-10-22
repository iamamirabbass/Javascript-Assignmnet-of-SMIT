// ***************************************************Q#1***************************************************
var arr=[[],[]];

// ***************************************************Q#2***************************************************

// var arr[[3],[4]]


// ***************************************************Q#3***************************************************

for (var i=1;i<=10;i++){
document.write(`${i}<br>`)
}

// ***************************************************Q#4***************************************************

var multipilcation_number=+prompt("Enter The Value You want to print Multiplication Table ");
var length=+prompt("Enter The Lenght of the Multiplication Table ");
for(i=1;i<=length;i++){

    document.write(`
    ${i} X ${multipilcation_number} = ${i*multipilcation_number}<br>
    
        `)
}


// ***************************************************Q#5***************************************************

var fruits=["Apple","Banana","Mango","Orange","Strawberry"];
for(i=0;i<fruits.length;i++){
    document.write(`
        Element at index${i} is ${fruits[i]}<br>
        `)
}

// ***************************************************Q#6***************************************************
document.write("<h4>Counting</h4>")    
for (i=1;i<=10;i++)
        {
            
        document.write(`
            ${i},`)
    }

    document.write("<h4>Reverse Counting</h4>") 
    for (i=10;i>=1;i--)
        {
            document.write(`${i},`)
        }

        document.write("<h4>Even</h4>")
        for (i=1;i<=20;i++){
            if(i%2===0){
                document.write(`${i},`)
            }
        }

        document.write("<h4>Odd</h4>")
        for (i=1;i<=20;i++){
            if(i%2!==0){
                document.write(`${i},`)
            }
        }

        document.write("<h4>Series</h4>")
        for (i=1;i<=20;i++){
            if(i%2===0){
                document.write(`${i}k,`)
            }
        }


// ***************************************************Q#7***************************************************
var bakery=["biscuit","cake","chips","sandwich","paties"]; //Bakery Items. 
var user_input=prompt("Welcome To our Bakery! What You need");//Getting User input.
var foundit=false;

for (var i=0;i<=bakery.length;i++){
    if (user_input===bakery[i]){
        foundit=true;
    }
}
if (foundit){
    alert("Item Available!");
    
}
else{
    alert("Item not  Available!")
}


// ***************************************************Q#8***************************************************
var num=[25,52,86,5,79];
var largest_num=[0];
for (var i=0;i<=num.length;i++){
    if(num[i]>largest_num){
        largest_num=num[i]
    }
}
alert(largest_num);

// ***************************************************Q#9***************************************************
   var num=[25,52,86,5,79];
    var smallest_num=[0];
    for (var i=0;i<=num.length;i++){
        if(num[i]<smallest_num){
            smallest_num=num[i]
        }
    }
    alert(smallest_num);

// ***************************************************Q#10***************************************************

    for (var i=1;i<=100;i++){
        if(i%5==0){
            document.write(`${i}<br>
        
            
            `)
    }
} 