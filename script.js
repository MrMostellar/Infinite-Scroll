const loader = document.getElementById("loader");
const contentContainer = document.getElementById("content");
let photosArray = [];
const count = 10;
const apiKey = 'a04JfAciLKIErx2hwDaw_nYjPP-4GJYwxoP6K3hhzEI';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`; 

function displayPhotos(){

    // make a function that takes each object from the array and creates the "post"
    photosArray.forEach((photo) => {
        // for each photo create a hyperlink, title, and load from the source.
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        // grab the src, alt text from the json file
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        // add the image and its attributes to the item variable, add the items variable to the container
        item.appendChild(img);
        contentContainer.appendChild(item);
    });
}

async function loadContent(){   

    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();

    } catch (error) {
        
        alert(error);

    }

}

function isLoading(){

    loader.hidden = false;

}

function finishedLoading(){
    
    loader.hidden = true;

}

// On page load:
loadContent();
finishedLoading();

