const image = document.getElementById("memoryImage");
const caption = document.getElementById("caption");

const photos = [
    "images/happy.jpeg",
    "images/partnerincrime.jpg",
    "images/random.jpeg",
    "images/shreya.jpg"
];

const captions = [
    "One of my favorite memories with you ❤️",
    "Partners in crime forever 😎",
    "Every moment becomes special when you're around ✨",
    "Thank you for being part of my life 🌸"
];

let current = 0;

function showPhoto() {
    image.src = photos[current];
    caption.textContent = captions[current];
}
function nextPhoto(){

    if(current === photos.length - 1){

        window.location.href = "cake.html";
        return;
    }

    current++;
    showPhoto();
}


function prevPhoto() {
    current = (current - 1 + photos.length) % photos.length;
    showPhoto();
}

showPhoto();