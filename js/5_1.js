//Vollständige Eigenleistung
function startPerformance() {
	for(var i=0; i<4; i++) 
	{
		var perf = measurePerformance(i);
		var label = labelHelper(i);
		addToTable(label, perf);
		console.log("Call of " + label + " took " + perf + " milliseconds.");
	}
}
	
function measurePerformance(val) {
	const t0 = performance.now();
	switch (val) {
		case 0:
			var innerhtml   = document.body.innerHTML;
			break;
		case 1:
			var innertext   = document.body.innerText;
			break;
		case 2:
			var textcontent = document.body.textContent;
			break;
		case 3:
			var outerhtml   = document.body.outerHTML;
			break;
	}
	const t1 = performance.now();
	return (t1-t0);
}

function addToTable(label, val) {
	var table = document.getElementById("times");
	var row   = table.insertRow(-1);
	var cell  = row.insertCell(0);
	var cell2 = row.insertCell(0);
	var text  = document.createTextNode(val);
	var text2 = document.createTextNode(label);
	cell.appendChild(text);
	cell2.appendChild(text2);
}

function labelHelper(val) {
	var label = "";
	switch (val) {
		case 0:
			label = "innerHTML";
			break;
		case 1:
			label = "innerText";
			break;
		case 2:
			label = "textContent";
			break;
		case 3:
			label = "outerHTML";
			break;
	}
	return label;
}