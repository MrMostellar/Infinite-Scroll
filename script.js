const loader = document.getElementById("loader");
const contentContainer = document.getElementById("content");
let photosArray = [];
const count = 5;
const apiKey = 'a04JfAciLKIErx2hwDaw_nYjPP-4GJYwxoP6K3hhzEI';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`; 

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
        count = 30;
    }
}

// utility function to set attributes
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos(){
    totalImages = photosArray.length;
    imagesLoaded = 0;
    // make a function that takes each object from the array and creates the "post"
    photosArray.forEach((photo) => {
        // for each photo create a hyperlink, title, and load from the source.
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        // grab the src, alt text from the json file
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        img.addEventListener("load", imageLoaded);
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

window.addEventListener("scroll", () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready == true){
        ready = false;
        loadContent();
    }
});

// On page load:
loadContent();
finishedLoading();

