// Crear, llegir i esborrar cookies
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

// Exemple d'ús
setCookie("usuari", "Joan", 7); // Crear cookie
console.log("Usuari: " + getCookie("usuari")); // Llegir cookie
// deleteCookie("usuari"); // Esborrar cookie
console.log("Usuari després d'esborrar: " + getCookie("usuari")); // Retorna null
