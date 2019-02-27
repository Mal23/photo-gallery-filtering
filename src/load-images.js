import makeImageTemplate from './make-image-template.js';

const imageList = document.getElementById('image-list');

function clearImages() {
    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }
}

function loadImages(images) {
    clearImages();

    images.forEach(image => {
        const dom = makeImageTemplate(image);
        imageList.appendChild(dom);
    });
    console.log(imageList);
}

export default loadImages;