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
var bakery=["Cake","Apple Pie","Cookie","Chips","Patties"];
var item=prompt("Enter The Item You Want");
for(var i=0;i<bakery.length;i++){
    if(bakery[i]===item){
        alert(item+ "Available!")
    }
    else{
        alert("We are Sorry" +item+ "is not available")
    }   
}