const loader = document.getElementById("loader");

function isLoading(){

    loader.hidden = false;

}

function finishedLoading(){
    
    loader.hidden = true;

}

async function loadContent(){    
    try {

        let response = await fetch('https://api.unsplash.com/photos/?client_id=a04JfAciLKIErx2hwDaw_nYjPP-4GJYwxoP6K3hhzEI');
        let data = await response.json();
        console.log(data);

    } catch (error) {
        
        alert(error);

    }
}
loadContent();
finishedLoading();

