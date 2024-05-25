document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('show');
});

function changeImage(imageSrc) {
    document.getElementById('current-image').src = imageSrc;
}

function changeValue(delta) {
    const input = document.getElementById('cantidad');
    const currentValue = parseInt(input.value);
    const newValue = currentValue + delta;

    if (newValue >= input.min && newValue <= input.max) {
        input.value = newValue;
    }
}

function scrollLeftContent() {
    const scrollContainer = document.querySelector('.scroll-content');
    scrollContainer.scrollBy({
        left: -200, // Ajusta este valor según la cantidad de desplazamiento deseado
        behavior: 'smooth'
    });
}

function scrollRight() {
    const scrollContainer = document.querySelector('.scroll-content');
    scrollContainer.scrollBy({
        left: 200, // Ajusta este valor según la cantidad de desplazamiento deseado
        behavior: 'smooth'
    });
}
function scrollLeftContent2() {
    const scrollContainer2 = document.querySelector('.scroll-content2');
    scrollContainer2.scrollBy({
        left: -200, // Ajusta este valor según la cantidad de desplazamiento deseado
        behavior: 'smooth'
    });
}

function scrollRight2() {
    const scrollContainer2 = document.querySelector('.scroll-content2');
    scrollContainer2.scrollBy({
        left: 200, // Ajusta este valor según la cantidad de desplazamiento deseado
        behavior: 'smooth'
    });
}