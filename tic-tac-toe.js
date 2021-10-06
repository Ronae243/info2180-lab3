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
    for (var i = 0; i < button.length; i++){
        if (i == 0){
            button[i].addEventListener("click", addXO_1);
        }

        if (i == 1){
            button[i].addEventListener("click", addXO_2);
        }
    
        if (i == 2){
            button[i].addEventListener("click", addXO_3);
        }
        
        if (i == 3){
            button[i].addEventListener("click", addXO_4);
        }
         
        if (i == 4){
            button[i].addEventListener("click", addXO_5);
        }
        
        if (i == 5){
            button[i].addEventListener("click", addXO_6);
        }
        
        if (i == 6){
            button[i].addEventListener("click", addXO_7);
        }
 
        if (i == 7){
            button[i].addEventListener("click", addXO_8);
        }
        
        if (i == 8){
            button[i].addEventListener("click", addXO_9);
        }
        
    }
}

function addXO_1(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    button[0].innerHTML = "O";

}

function addXO_2(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    button[1].innerHTML = "O";

}

function addXO_3(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    button[2].innerHTML = "O";

}

function addXO_4(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    button[3].innerHTML = "O";

}

function addXO_5(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    button[4].innerHTML = "O";

}

function addXO_6(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    button[5].innerHTML = "O";

}

function addXO_7(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    button[6].innerHTML = "O";

}

function addXO_8(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    button[7].innerHTML = "O";

}

function addXO_9(){
    
    var outDiv = document.getElementById("board");
    var button = outDiv.getElementsByTagName("div");
    button[8].innerHTML = "O";

}



window.addEventListener("DOMContentLoaded",function(){
    board_layout();
    activClick();
    addXO_1;
    addXO_2;
    addXO_3;
    addXO_4;
    addXO_5;
    addXO_6;
    addXO_7;
    addXO_8;
    addXO_9;
})