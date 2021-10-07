function board_layout(){
    var outDiv = document.getElementById("board");
    var inDiv = outDiv.getElementsByTagName("div");
    for (var int = 0; int < inDiv.length; int++){
        var clasDiv = inDiv[int].className = "square";
    }
    return (clasDiv);
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

var track = ["","","","","","","","",""];
var turn = 1;
function addXO_1(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[0].innerHTML = "X";
        turn = 0;
        track[0] = "X";
    }
    else{
        button[0].innerHTML = "O";
        turn = 1;
        track[0]= "O";
    }
}

function addXO_2(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[1].innerHTML = "X";
        turn = 0;
        track[1] = "X";
    }
    else{
        button[1].innerHTML = "O";
        turn = 1;
        track[1]= "O";
    }
}

function addXO_3(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[2].innerHTML = "X";
        turn = 0;
        track[2] = "X";
        
    }
    else{
        button[2].innerHTML = "O";
        turn = 1;
        track[2]= "O";
    }

}

function addXO_4(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[3].innerHTML = "X";
        turn = 0;
        track[3] = "X";
    }
    else{
        button[3].innerHTML = "O";
        turn = 1;
        track[3]= "O";
    }
}

function addXO_5(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[4].innerHTML = "X";
        turn = 0;
        track[4] = "X";
    }
    else{
        button[4].innerHTML = "O";
        turn = 1;
        track[4]= "O";
    }
}

function addXO_6(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[5].innerHTML = "X";
        turn = 0;
        track[5] = "X";
    }
    else{
        button[5].innerHTML = "O";
        turn = 1;
        track[5]= "O";
    }
}

function addXO_7(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[6].innerHTML = "X";
        turn = 0;
        track[6] = "X"; 
    }
    else{
        button[6].innerHTML = "O";
        turn = 1;
        track[6]= "O";
    }
}

function addXO_8(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[7].innerHTML = "X";
        turn = 0;
        track[7] = "X";
    }
    else{
        button[7].innerHTML = "O";
        turn = 1;
        track[7]= "O";  
    }
}

function addXO_9(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    if (turn == 1){
        button[8].innerHTML = "X";
        turn = 0;
        track[8] = "X";
    }
    else{
        button[8].innerHTML = "O";
        turn = 1;
        track[8]= "O";
    }
}


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

    window.addEventListener("DOMContentLoaded",function(){
    board_layout();
    activClick();
    hoveron();
    hoveroff();
})