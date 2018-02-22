function main() {
	console.log('Hello');
}

// Autorun
function autorun() {
	main();
}
if (document.addEventListener) {
	document.addEventListener('DOMContentLoaded', autorun, false);
}
else if (document.attachEvent) {
	document.attachEvent('onreadystatechange', autorun);
}
else {
	window.onload = autorun;
}
