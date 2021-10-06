function board_layout(){
    var outDiv = document.getElementById("board");
    var inDiv = outDiv.getElementsByTagName("div");
    for (var int = 0; int < inDiv.length; int++){
        var clasDiv = inDiv[int].className = "square";
    }
    return (clasDiv);
}

    window.addEventListener("DOMContentLoaded",function(){
    board_layout();
})