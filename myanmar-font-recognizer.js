/**
 * Copyright 2018 The myanmar-font-recognizer Authors (https://github.com/chanmratekoko/myanmar-font-recognizer/graphs/contributors)
*/
function isUnicode() {
	
	var firstChild = document.createElement("span");
	firstChild.innerHTML = "\u1000";
	
	var secondChild = document.createElement("span");
	secondChild.innerHTML = "\u1000\u1039\u1001";

	document.body.appendChild(firstChild);
	document.body.appendChild(secondChild);
	
	var isunicode =  firstChild.offsetWidth >= secondChild.offsetWidth;
	
	document.body.removeChild(firstChild);
	document.body.removeChild(secondChild);
	
	return isunicode;
}