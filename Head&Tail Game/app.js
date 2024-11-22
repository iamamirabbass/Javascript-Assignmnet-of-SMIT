function player_info (){
    var player1name=document.getElementById('player_1')
    var player2name=document.getElementById('player_2')
    selectiontext.innerHTML=player1name.value+" To Choose";           
}

function Head(){
    var player1name=document.getElementById('player_1')
    var player2name=document.getElementById('player_2')
    selectiontext.innerHTML=player1name.value+" Choose Head and "+player2name.value+" Choose Tail";
    }

    function Tail(){
        var player1name=document.getElementById('player_1')
        var player2name=document.getElementById('player_2')
        selectiontext.innerHTML=player1name.value+"Choose Tail and "+player2name.value+" Choose Head";
    
    }

// function toss_result(){
//     var player1name=document.getElementById('player_1')
//     var player2name=document.getElementById('player_2')
//     selectiontext.innerHTML=player1name.value+" To Choose"; 
//     var player1_selection=
//     var toss=Math.random()*2;
//     var result = Math.round(toss)
//     if (result==0 && result== value.Head()){
//         console.log("its a Head")
//     }
//     else{
//         console.log("Tail")
//     }
// }

function toss_result(){
var arr = ['H' , 'T']
        var randomNum = Math.floor(Math.random * arr.length)  // 0 , 1
        var userName1 = document.getElementById('player_1').value  // Ali
        var user1Selection = document.getElementById('head1' ||'tail0').value // H
        var userName2 = document.getElementById('player_2').value // Anus


        if(user1Selection === arr[randomNum]) { 

            console.log(`${userName1} is Winner  `)
        } else {
            console.log(`${userName2} is winner`)
        }
    }