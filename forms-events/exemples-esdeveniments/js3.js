function mou(element) {
	var dreta = Math.floor((Math.random() * screen.availWidth) - 49);
	var superior = Math.floor((Math.random() * screen.availHeight) - 49);
	element.style.top = superior+"px";
	element.style.left = dreta+"px";
}

