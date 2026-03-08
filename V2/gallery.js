const images = [
    'look1.jpg', 
    'look2.jpg', 
    'look3.jpg'
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(src => {
    const img = document.createElement('img');
    img.src = `images/${src}`; 
    img.onclick = () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    };
    gallery.appendChild(img);
});

document.getElementById('close').onclick = () => lightbox.style.display = 'none';
lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = 'none'; };