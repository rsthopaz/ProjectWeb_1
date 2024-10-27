const scrollAmount = 10000; // Sesuaikan nilai ini agar sesuai dengan lebar tiga gambar

function scrollLeft() {
    document.querySelector('.cta-content').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.cta-content').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}
