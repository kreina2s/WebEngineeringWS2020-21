let map = {};
	
let updateMap = function(str) {
	map = {};
	// innerHTML empty case creates a <br> tag, this has to be deleted
	if(str === "<br>") {
		str = '';
		field.innerHTML = '';
	}
	str = str.replace("<br>", "");
	
	if(str.includes(",")) {
		let symbols = str.split(",");
		for(let i=0; i<symbols.length; i++) {
			map[symbols[i][0]] = symbols[i][1];
		}
	}
}

let brackets = function(str) {
	console.log(map);
	var field = document.getElementById("bracketInput");

	// innerHTML empty case creates a <br> tag, this has to be deleted
	if(str === "<br>") {
		str = '';
		field.innerHTML = '';
	}
	
	let stack = [];
	
	for (let i=0; i<str.length; i++) {
		// Get keys for if/else clause
		let keys = [];
		for (const [key, value] of Object.entries(map)) {
			var k = `${key}`;
			keys.push(k);
		}
		// Handle opening brackets: add to stack 
		let equal = false;
		
		for(let j=0; j<keys.length; j++) {
			if(str[i] == keys[j]) {
				equal = true;
			}
		}
		
		if(equal) {
			stack.push(str[i]);
		}
		
		// Handle closing brackets: remove from stack
		else {
			let close = stack.pop();
			
			// Mismatch of brackets: fail
			if(str[i] !== map[close]) {
				field.style.backgroundColor = "red";
				return false;
			}
		}
	}
	// If stack is not empty after completion: fail
	if(stack.length !== 0) {
		field.style.backgroundColor = "red";
		return false;
	}
	// Otherwise: Success
	field.style.backgroundColor = "white";
	return true;
}