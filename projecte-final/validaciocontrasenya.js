// Validar contrasenya amb onblur
function validarContrasenya() {
    const contrasenya = document.getElementById("contrasenya").value;
    const error = document.getElementById("error-contrasenya");

    if (
        contrasenya.length >= 8 && // Longitud mínima
        /[a-z]/.test(contrasenya) && // Una minúscula
        /[A-Z]/.test(contrasenya) && // Una majúscula
        /\d/.test(contrasenya) && // Un dígit
        /[!@#$%^&*(),.?":{}|<>]/.test(contrasenya) // Un caràcter especial
    ) {
        error.textContent = ""; // Sense error
    } else {
        error.textContent = "La contrasenya ha de tenir almenys 8 caràcters, una majúscula, una minúscula, un dígit i un caràcter especial.";
    }
}

// Mostrar/ocultar contrasenya
function mostrarContrasenya() {
    const contrasenya = document.getElementById("contrasenya");
    const mostrar = document.getElementById("mostrar-contrasenya");

    if (mostrar.checked) {
        contrasenya.type = "text"; // Mostra la contrasenya
    } else {
        contrasenya.type = "password"; // Oculta la contrasenya
    }
}
