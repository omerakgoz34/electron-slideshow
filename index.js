function gotoLink(x) {
	if (x == 'slideshow') {
		setTimeout(() => {
			document.location.assign("main.html");
		}, 500);
	}
	if (x == 'mainwebsite') {
		setTimeout(() => {
			document.location.assign("https://omerakgoz34.github.io");
		}, 500);
	}
}