// Validar correu electrònic amb onblur
function validarEmail() {
    const email = document.getElementById("email").value;
    const error = document.getElementById("error-email");

    // Comprova el format correcte d'un correu electrònic
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (emailValid) {
        error.textContent = ""; // Sense error
    } else {
        error.textContent = "Escriviu un correu electrònic vàlid.";
    }
}
