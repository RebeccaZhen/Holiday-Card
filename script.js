function myName() {
	let text1 = "Merry Christmas, ";
	document.getElementById("merrychristmas").innerHTML = document.getElementById("name").value;
	let text2 = document.getElementById("name").value;
	let text3 = "!";
	let result = text1.concat(" ", text2, text3);
	if (text2) {
	document.getElementById("merrychristmas").innerHTML = result; 
	} else {
		document.getElementById("merrychristmas") = "Merry Christmas!";
	}
}

function myForm() {
	var myobj = document.getElementById("form");
	myobj.remove();
}