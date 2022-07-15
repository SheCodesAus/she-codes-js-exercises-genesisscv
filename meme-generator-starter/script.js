function getImage() {
    let imageURL = document.getElementById("image-url").value;

    let imageBox = document.createElement('img');
    imageBox.id = 'meme-image';
    imageBox.src = imageURL;
    let wrapper = document.getElementById('meme-image-wrapper');
    wrapper.appendChild(imageBox);
}

// up to page 51