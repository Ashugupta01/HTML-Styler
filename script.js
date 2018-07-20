function showInput() {
	document.getElementById("getDetails").style.display="none";
	document.getElementById("themeContent").style.display="";
	var getHeading = document.getElementById("heading").value;
	var getContent = document.getElementById("content").value;
	var getStyle = document.getElementById("style").value;

	if (getStyle==1) {
		document.getElementById("MonokaiTheme").style.display="none";
		document.getElementById("SolarTheme").style.display="";
		document.getElementById("SolarHeading").innerHTML = getHeading;
		document.getElementById("SolarContent").innerHTML = getContent;
	}
	else if (getStyle==2) {
		document.getElementById("SolarTheme").style.display="none";
		document.getElementById("MonokaiTheme").style.display="";
		document.getElementById("MonokaiHeading").innerHTML = getHeading;
		document.getElementById("MonokaiContent").innerHTML = getContent;
	}
}

function goBack() {
	document.getElementById("getDetails").style.display="";
	document.getElementById("themeContent").style.display="none";
}