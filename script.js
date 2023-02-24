const loader = document.getElementById("loader");

function isLoading(){

    loader.hidden = false;

}

function finishedLoading(){
    
    loader.hidden = true;

}

finishedLoading();