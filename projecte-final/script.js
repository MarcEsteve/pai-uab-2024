document.getElementById("enviar").addEventListener("click", validarFormulari);
document.getElementById("esborrar").addEventListener("click", esborrarFormulari);

// Validacions
function validarFormulari() {
  let errors = false;

  // Nom i Cognoms
  const nom = document.getElementById("nom");
  if (!nom.value.match(/^[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*(\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*)+$/)) {
    document.getElementById("error-nom").textContent = "Escriviu un nom vàlid.";
    errors = true;
  } else {
    document.getElementById("error-nom").textContent = "";
  }

  // Rang d'edats
  const edat = document.getElementById("edat");
  if (edat.value === "") {
    document.getElementById("error-edat").textContent = "Seleccioneu un rang d'edat.";
    errors = true;
  } else {
    document.getElementById("error-edat").textContent = "";
  }

  // Codi Postal
  const codi = document.getElementById("codi-postal");
  if (!codi.value.match(/^\d{5}$/)) {
    document.getElementById("error-codi").textContent = "Escriviu un codi postal vàlid.";
    errors = true;
  } else {
    document.getElementById("error-codi").textContent = "";
  }

  // Correu Electrònic
  const email = document.getElementById("email");
  if (!email.value.match(/^[^@]+@[^@]+\.[a-z]{2,}$/i)) {
    document.getElementById("error-email").textContent = "Escriviu un correu vàlid.";
    errors = true;
  } else {
    document.getElementById("error-email").textContent = "";
  }

  // Contrasenya
  const contrasenya = document.getElementById("contrasenya");
  if (!contrasenya.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/)) {
    document.getElementById("error-contrasenya").textContent = "Contrasenya no vàlida.";
    errors = true;
  } else {
    document.getElementById("error-contrasenya").textContent = "";
  }

  // Confirmar Contrasenya
  const confirmar = document.getElementById("confirmar-contrasenya");
  if (confirmar.value !== contrasenya.value) {
    document.getElementById("error-confirmar").textContent = "Les contrasenyes no coincideixen.";
    errors = true;
  } else {
    document.getElementById("error-confirmar").textContent = "";
  }

  // Privacitat
  const privacitat = document.getElementById("privacitat");
  if (!privacitat.checked) {
    document.getElementById("error-privacitat").textContent = "Accepteu la política de privacitat.";
    errors = true;
  } else {
    document.getElementById("error-privacitat").textContent = "";
  }

  // Resultat
  if (!errors) {
    document.getElementById("resultat").textContent = "Formulari enviat correctament!";
  } else {
    document.getElementById("resultat").textContent = "";
  }
}

// Esborrar formulari
function esborrarFormulari() {
  document.getElementById("formulari").reset();
  document.querySelectorAll(".error").forEach(error => error.textContent = "");
}
