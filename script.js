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