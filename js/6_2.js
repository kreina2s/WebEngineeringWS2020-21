window.onload = function() {
var input = document.getElementById("topologyInput");
input.addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("sortButton").click();
	}
});
}

var topology = [];

function startProcess() {
// Topologie Resetten
topology = [];

// String aus Feld entnehmen und in Topologie umwandeln
var input = document.getElementById("topologyInput").innerHTML;
var temp = input.split(';');

for(var i=0; i<temp.length; i++) {
	var relation = temp[i].split(",");
	var relArr = [relation[0], relation[1]];
	topology.push(relArr);
}

// Array topsort 
var a = new Vorrang(topology);

// (Löschen der alten Liste) 
// Sortiertes Array in liste einfügen
var ul = document.getElementById("topologyList");
ul.innerHTML = '';

var count = 0;
var map = new Map();
var set = new Set();

for(let it of a) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(it));
	ul.appendChild(li);
}
}

class Vorrang { 
constructor(data) {
 this._data = data;
 this._map  = new Map();
 this._set  = new Set();
}


[Symbol.iterator]() {
 var nextIdx = -1;
 let data = this._data;
 let map  = this._map;
 let set  = this._set;
 var it   = set.keys();
 
 return {
   next: () => {
	 nextIdx++;
	 this.createMap();
	 this.addToSet();
	 this.delValue();
	 return it.next();
   }
 }
}

createMap() {
 var data = this._data;
 var map  = this._map;
 
 for(let i=0; data.length>i; i++) {
   for(let j=0; data[i].length>j; j++) {
	 map.set(data[i][j], this.getPrecursors(data[i][j]));
   }
 }
}

addToSet() {
 var map = this._map;
 var set = this._set;
 
 for(let key of map.keys()) {
   if(map.get(key) === 0 && !set.has(key)) {
	 set.add(key);
	 break;
   }
 }
}

delValue() {
 var data = this._data;
 var set  = this._set;
 for(let i=0; data.length>i; i++) {
   for(let j=0; data[i].length>j; j++) {
	 if(set.has(data[i][j])) {
	   data[i][j] = data[i][j+1];
	   data[i][j+1] = undefined;
	 }
   }
 }
}

getPrecursors(val) {
 var data = this._data;
 var count = 0;
 for(let i=0; data.length>i; i++) {
   if(data[i][1] === val) {
	 count++;
   }
 }
 return count;
}
} 