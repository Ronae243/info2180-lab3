//Name:Ronae Johnson 
//Date:5/10/2021

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
    var button = outDiv.getElementsByTagName("div");
    button[0].addEventListener("click", addXO_1);
    button[1].addEventListener("click", addXO_2);
    button[2].addEventListener("click", addXO_3);
    button[3].addEventListener("click", addXO_4);
    button[4].addEventListener("click", addXO_5);
    button[5].addEventListener("click", addXO_6);
    button[6].addEventListener("click", addXO_7);
    button[7].addEventListener("click", addXO_8);
    button[8].addEventListener("click", addXO_9);
}


row1 =[];
row2 =[];
row3 =[];
var turn = 1;
function addXO_1(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[0].innerHTML = "X";
        button[0].classList.add("X");
        button[0].style.pointerEvents = 'none';
        turn = 0;
        row1[0] = 1;
        console.log(turn);      
    }
    else{
        button[0].innerHTML = "O";
        button[0].classList.add("O");
        button[0].style.pointerEvents = 'none';
        turn = 1;
        row1[0]= 0;
    }
}

function addXO_2(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[1].innerHTML = "X";
        button[1].classList.add("X");
        button[1].style.pointerEvents = 'none';
        turn = 0;
        row1[1] = 1;
        
    }
    else{
        button[1].innerHTML = "O";
        button[1].classList.add("O");
        button[1].style.pointerEvents = 'none';
        turn = 1;
        row1[1]= 0;
    }
}

function addXO_3(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[2].innerHTML = "X";
        button[2].classList.add("X");
        button[2].style.pointerEvents = 'none';
        turn = 0;
        row1[2] = 1;
        
    }
    else{
        button[2].innerHTML = "O";
        button[2].classList.add("O");
        button[2].style.pointerEvents = 'none';
        turn = 1;
        row1[2] = 0;
       
    }
}

function addXO_4(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[3].innerHTML = "X";
        button[3].classList.add("X");
        button[3].style.pointerEvents = 'none';
        turn = 0;
        row2[0] = 1;
    }
    else{
        button[3].innerHTML = "O";
        button[3].classList.add("O");
        button[3].style.pointerEvents = 'none';
        turn = 1;
        row2[0]= 0;
    }
}

function addXO_5(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[4].innerHTML = "X";
        button[4].classList.add("X");
        button[4].style.pointerEvents = 'none';
        turn = 0;
        row2[1] = 1;
    }
    else{
        button[4].innerHTML = "O";
        button[4].classList.add("O");
        button[4].style.pointerEvents = 'none';
        turn = 1;
        row2[1]= 0;
    }
}

function addXO_6(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[5].innerHTML = "X";
        button[5].classList.add("X");
        button[5].style.pointerEvents = 'none';
        turn = 0;
        row2[2] = 1;
    }
    else{
        button[5].innerHTML = "O";
        button[5].classList.add("O");
        button[5].style.pointerEvents = 'none';
        turn = 1;
        row2[2]= 0;
    }
}

function addXO_7(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[6].innerHTML = "X";
        button[6].classList.add("X");
        button[6].style.pointerEvents = 'none';
        turn = 0;
        row3[0] = 1; 
    }
    else{
        button[6].innerHTML = "O";
        button[6].classList.add("O");
        button[6].style.pointerEvents = 'none';
        turn = 1;
        row3[0]= 0;
    }
}

function addXO_8(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[7].innerHTML = "X";
        button[7].classList.add("X");
        button[7].style.pointerEvents = 'none';
        turn = 0;
        row3[1] = 1;
    }
    else{
        button[7].innerHTML = "O";
        button[7].classList.add("O");
        button[7].style.pointerEvents = 'none';
        turn = 1;
        row3[1]= 0;  
    }
}

function addXO_9(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[8].innerHTML = "X";
        button[8].classList.add("X");
        button[8].style.pointerEvents = 'none';
        turn = 0;
        row3[2] = 1;
    }
    else{
        button[8].innerHTML = "O";
        button[8].classList.add("O");
        button[8].style.pointerEvents = 'none';
        turn = 1;
        row3[2]= 0;
    }
}


// The hoveroff functions set listners of each to div to detect when the mouse is one the squares.
function hoveron(){
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[0].addEventListener("mouseover", hoverover_0);
    buttonHover[1].addEventListener("mouseover", hoverover_1);
    buttonHover[2].addEventListener("mouseover", hoverover_2);
    buttonHover[3].addEventListener("mouseover", hoverover_3);
    buttonHover[4].addEventListener("mouseover", hoverover_4);
    buttonHover[5].addEventListener("mouseover", hoverover_5);
    buttonHover[6].addEventListener("mouseover", hoverover_6);
    buttonHover[7].addEventListener("mouseover", hoverover_7);
    buttonHover[8].addEventListener("mouseover", hoverover_8);
}


// the hoverout functions are activated by the hoveroff listeners to add the hover stlye to the squares.
function hoverover_0() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[0].classList.add("hover");
}

function hoverover_1() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[1].classList.add("hover");
}

function hoverover_2() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[2].classList.add("hover");
}

function hoverover_3() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[3].classList.add("hover");
}

function hoverover_4() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[4].classList.add("hover");
}

function hoverover_5() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[5].classList.add("hover");
}

function hoverover_6() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[6].classList.add("hover");
}

function hoverover_7() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[7].classList.add("hover");
}

function hoverover_8() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[8].classList.add("hover");
}
//.....................................hoverover functions ends.......................//


// The hoveroff functions set listners of each to div to detect when the mouse is away from the square.
function hoveroff(){
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[0].addEventListener("mouseout", hoverout_0);
    buttonHover[1].addEventListener("mouseout", hoverout_1);
    buttonHover[2].addEventListener("mouseout", hoverout_2);
    buttonHover[3].addEventListener("mouseout", hoverout_3);
    buttonHover[4].addEventListener("mouseout", hoverout_4);
    buttonHover[5].addEventListener("mouseout", hoverout_5);
    buttonHover[6].addEventListener("mouseout", hoverout_6);
    buttonHover[7].addEventListener("mouseout", hoverout_7);
    buttonHover[8].addEventListener("mouseout", hoverout_8);
}
// the hoverout functions are activated by the hoveroff listeners to remove the hover stlye from the squares.
function hoverout_0() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[0].classList.remove("hover");
}

function hoverout_1() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[1].classList.remove("hover");
}

function hoverout_2() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[2].classList.remove("hover");
}

function hoverout_3() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[3].classList.remove("hover");
}

function hoverout_4() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[4].classList.remove("hover");
}

function hoverout_5() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[5].classList.remove("hover");
}

function hoverout_6() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[6].classList.remove("hover");
}

function hoverout_7() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[7].classList.remove("hover");
}

function hoverout_8() {
    var outDiv = document.getElementById("board");
    var buttonHover = outDiv.getElementsByTagName("div");
    buttonHover[8].classList.remove("hover");
}
//........................hoverout functions ends........................//


//the restart function applies a lister to the button element.
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
 

window.addEventListener("DOMContentLoaded",function(){
    board_layout();
    activClick();
    hoveron();
    hoveroff();
    restart();  
})