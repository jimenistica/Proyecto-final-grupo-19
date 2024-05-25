/*Mostrar/ocultar navbar*/
document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('show');
});

/*Cambiar imágenes crande/chicas*/
function changeImage(imageSrc) {
    document.getElementById('current-image').src = imageSrc;
}

/*Cambiar cantidad de productos*/
function changeValue(delta) {
    const input = document.getElementById('cantidad');
    const currentValue = parseInt(input.value);
    const newValue = currentValue + delta;

    if (newValue >= input.min && newValue <= input.max) {
        input.value = newValue;
    }
}

/*scrolear en x con flechitas*/
function scrollLeftContent() {
    const scrollContainer = document.querySelector('.scroll-content');
    scrollContainer.scrollBy({
        left: -200, 
        behavior: 'smooth'
    });
}

function scrollRight() {
    const scrollContainer = document.querySelector('.scroll-content');
    scrollContainer.scrollBy({
        left: 200, 
        behavior: 'smooth'
    });
}
function scrollLeftContent2() {
    const scrollContainer2 = document.querySelector('.scroll-content2');
    scrollContainer2.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight2() {
    const scrollContainer2 = document.querySelector('.scroll-content2');
    scrollContainer2.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}

/*Validar formulario*/
const formRegister = document.querySelector("#formRegister");
const limpiarErrores = () => {
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input.error, textarea.error").forEach(el => el.classList.remove("error"));
};
function validarTelefono(telefono) {
    const regex = /^[0-9\s-]+$/;
    return regex.test(telefono);
}

const validarFormulario = (event) => {

    event.preventDefault();

    const name = document.querySelector("#name");
    const apellido = document.querySelector("#apellido");
    const email = document.querySelector("#email");
    const tel = document.querySelector("#tel");
    const mensaje = document.querySelector("#mensaje");
    let validation = true;

    limpiarErrores(); 
    if(name.value.trim() ===""){
        name.classList.add("error");
        document.querySelector("#error-name").textContent ="Debe completar el campo Nombre";
        validation = false;
    }
    if(apellido.value.trim()===""){
        document.querySelector("#error-apellido").textContent="Debe completar el campo apellido";
        apellido.classList.add("error");
        validation= false;
    }
    if(email.value.trim()===""){
        document.querySelector("#error-email").textContent='Debe completar el campo Email';
        email.classList.add('error')
        validation=false;
    }
    if(tel.value.trim()===""){
        document.querySelector("#error-tel").textContent='Debe completar el campo Teléfono';
        tel.classList.add('error');
        validation=false;
    }else if(!validarTelefono(tel)){
        document.querySelector("#error-tel").textContent="El campo debe contener solo números";
        tel.classList.add("error");
        validation=false;
    }
    if(mensaje.value.trim()===""){
        document.querySelector("#error-mensaje").textContent='Debe completar el campo Mensaje';
        mensaje.classList.add('error')
        validation=false;
    }

    if(validation){
        formRegister.submit()
    } else{
        return false;
    }

}

formRegister.addEventListener("submit",validarFormulario);
