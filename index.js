document.querySelectorAll('.gallery img').forEach(img => {
    const randomWidth = Math.floor(Math.random() * (300 - 150 + 1)) + 150;
    const randomHeight = Math.floor(Math.random() * (350 - 200 + 1)) + 200;
    img.style.width = `${randomWidth}px`;
    img.style.height = `${randomHeight}px`;
});

const gallery = document.querySelector('.gallery');
const images = Array.from(gallery.children);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledImages = shuffle(images);
gallery.innerHTML = '';
shuffledImages.forEach(img => gallery.appendChild(img));
