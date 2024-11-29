function canviar(element){
	if (element.name == "gat1") {
		element.src = "gato1b.jpg";
		element.name = "gat2";
		clase("grey");
	} else {
		element.src = "gato1.jpg";
		element.name = "gat1";
		clase("black");
	}
}

function clase (color) {
	// styleSheets ens llista totes les fulles d'estils (pot haver més d'una)
	// Com que només tenim una, ens quedem amb la primera.
	var css = document.styleSheets[0]; 
	// cssRules ens treu totes les regles que hi ha al full d'estils
	// Genera una taula amb totes les regles 
	var regles = css.cssRules;
	// Ara buscarem la regla .gris que és la que volem canviar
	var i = 0;
	while (i<regles.length && regles[i].selectorText!=".gris"){
		i++;
	}
	// Si la trobem, l'esborrem. Per fer-ho hem de fer servir la posició on
	// es troba dins de la taula de regles.
	// Després la tornem a afegir. L'afegim al mateix lloc on estava tot i
	// que no caldria.
	if (regles[i].selectorText==".gris") {
		css.deleteRule(i);
		css.insertRule(".gris {color:"+color+";}",i);
	}
}