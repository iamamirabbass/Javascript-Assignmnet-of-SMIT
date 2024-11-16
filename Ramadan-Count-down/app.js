
function ramadan_countdown(){

    var current_date=new Date();
    var ramadan_date=new Date("February 28,2025");
    var ramadan_counter=current_date-ramadan_date;
    
    var days= Math.abs(Math.floor(ramadan_counter/(1000*60*60*24)))
      var hour = Math.abs(Math.floor((ramadan_counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      var min = Math.abs(Math.floor((ramadan_counter % (1000 * 60 * 60)) / (1000 * 60)));
    
      var sec = Math.abs(Math.floor((ramadan_counter % (1000 * 60 )) / (1000 )));
      
      document.getElementById("getdays").innerHTML = `${days}`;
      document.getElementById("gethour").innerHTML = `${hour}`;
      document.getElementById("getmin").innerHTML = `${min}`;
      document.getElementById("getsec").innerHTML = `${sec}`;
    }

ramadan_countdown()