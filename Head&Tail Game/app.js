// var user_1name=prompt("Enter The Name of First Player")
// var user_2name=prompt("Enter The Name of Second Player")


function player_info (){
    var player1name=document.getElementById('player_1')
    var player2name=document.getElementById('player_2')
    selectiontext.innerHTML=player1name.value+" To Choose";       
}

function head(){
    decidetext.innerHTML=player1name.value+"Choose Head and "+player2name+" Choose Tail";
    
}