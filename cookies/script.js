// Funció per configurar una cookie
function setColorCookie(color) {
    document.cookie = `backgroundColor=${color};path=/;max-age=86400`; // Cookie amb durada d'1 dia
    document.body.style.backgroundColor = color; // Canvia el color immediatament
}

// Funció per llegir cookies
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return value;
        }
    }
    return null; // Retorna null si no es troba la cookie
}

// Aplica el color de fons en carregar la pàgina
window.onload = function () {
    const color = getCookie('backgroundColor');
    if (color) {
        document.body.style.backgroundColor = color;
    }
};
