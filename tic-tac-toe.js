//Name:Ronae Johnson 


var turn = 1;
// board_layout function uses a for loop to append the square class to each div under id board.
function board_layout(){
    var outDiv = document.getElementById("board");
    var inDiv = outDiv.getElementsByTagName("div");
    for (var int = 0; int < inDiv.length; int++){
    inDiv[int].className = "square";
    }
   
}


function activClick(){
    var outDiv = document.getElementById("board");
    let button = outDiv.getElementsByTagName("div");
    for (const buttoni of button){
        buttoni.addEventListener("click", function(){
        if (turn == 1){
            buttoni.innerHTML = "X";
            buttoni.classList.add("X");
            buttoni.style.pointerEvents = 'none';            
            turn = 0;
            test();
        }
        else{
            buttoni.innerHTML = "O";
            buttoni.classList.add("O");
            buttoni.style.pointerEvents = 'none';
            turn = 1;
            test();
        }
      })
    }
   
}

// The hoveron functions set listners of each to div to detect when the mouse is one the squares.
function hoveron(){
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    for (const buttoni of button){
        buttoni.addEventListener("mouseover", function(){
            buttoni.classList.add("hover");
        })
    }

}


// The hoveroff functions set listners of each to div to detect when the mouse is away from the square.
function hoveroff(){
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    for (const buttoni of button){
        buttoni.addEventListener("mouseout", function(){
            buttoni.classList.remove("hover");
        })
    }
}

// the hoverout functions are activated by the hoveroff listeners to remove the hover stlye from the squares.

//......................restart function start .........................../
function restart(){
    var resetbtn = document.querySelector("button");
    resetbtn.addEventListener("click", refresh);
}
//......................restart function ends ...........................//


//The resfresh function sets the text in each div as null.
function refresh(){
    location.reload();
}
//....................refresh function ends..............................//



function test(){
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    var status = document.getElementById("status");
    
    if (button[0].innerHTML == "X" && button[1].innerHTML == "X" && button[2].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}
    }
    else if (button[0].innerHTML == "X" && button[3].innerHTML == "X" && button[6].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}
    }
    else if (button[6].innerHTML == "X" && button[7].innerHTML == "X" && button[8].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}
    }
    else if (button[2].innerHTML == "X" && button[5].innerHTML == "X" && button[8].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}
    }
    else if (button[0].innerHTML == "X" && button[4].innerHTML == "X" && button[8].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}
    }
    else if (button[2].innerHTML == "X" && button[4].innerHTML == "X" && button[6].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}
    }
    else if (button[1].innerHTML == "X" && button[4].innerHTML == "X" && button[8].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}
    }
    else if (button[3].innerHTML == "X" && button[4].innerHTML == "X" && button[5].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");  
        for( const btn of button){btn.style.pointerEvents = 'none';}                
    }
                       
                       ///Checks for player 2 begins ///
    else if (button[0].innerHTML == "O" && button[1].innerHTML == "O" && button[2].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}   
    }
    else if (button[0].innerHTML == "O" && button[3].innerHTML == "O" && button[6].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}   
    }
    else if (button[6].innerHTML == "O" && button[7].innerHTML == "O" && button[8].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}   
    }
    else if (button[2].innerHTML == "O" && button[5].innerHTML == "O" && button[9].innerHTML== "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}   
    }
    else if (button[0].innerHTML == "O" && button[4].innerHTML == "O" && button[8].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}   
    }
    else if (button[2].innerHTML == "O" && button[4].innerHTML == "O" && button[6].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}   
    }
    else if (button[1].innerHTML == "O" && button[4].innerHTML == "O" && button[7].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}   
    }
    else if (button[3].innerHTML == "O" && button[4].innerHTML == "O" && button[5].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of button){btn.style.pointerEvents = 'none';}   
    }
  
}

window.addEventListener("DOMContentLoaded",function(){
    board_layout();
    activClick();
    hoveron();
    hoveroff();
    restart();  
    test();
})