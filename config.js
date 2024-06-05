

document.addEventListener('DOMContentLoaded', (event) => {
    // Panggil fungsi Anda di sini
    document.addEventListener('scroll', function() {
    var div = document.getElementById('portfolio');
    var position = div.getBoundingClientRect();

    // Periksa apakah div sudah berada dalam viewport
    if(position.top < window.innerHeight && position.bottom >= 0) {
        div.classList.remove('opacity-0');
        div.classList.add('opacity-100');
    }
});
});
