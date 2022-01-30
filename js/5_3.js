//Vollständige Eigenleistung
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
		//alert(relation[0] + " " + relation[1]);
		var relArr = [relation[0], relation[1]];
		topology.push(relArr);
	}
	
	// Array topsort 
	var order = topSort(topology);
	
	// (Löschen der alten Liste) 
	// Sortiertes Array in liste einfügen
	var ul = document.getElementById("topologyList");
	ul.innerHTML = '';
	
	for(var i=0; i<order.length; i++)
	{
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(order[i]));
		ul.appendChild(li);
	}
	
}


function topSort(graph) {
  /* Bestimme zunaechst die Graphenlabels und setze sie auf 0 */
  var initialNames = topologyNames(graph);
  
  /* Berechne Anzahl der Vorgaengerelemente */
  var precursors = countPrecursors(graph, initialNames);
  
  /* Gehe durch die Elemente und gebe die Reihenfolge 
  der Topologie aus */
  var order = findOrder(graph, precursors);
  //console.log(order);
  return order;
}

/* Hilfsfunktion, um alle Graphnamen zu extrahieren */
function topologyNames(graph) {
  var names = [];
  for(var i=0; i<graph.length; i++) {
    for(var j=0; j<graph[i].length; j++) {
      var exists = 1;
      var label = graph[i][j];
    
      /* Pruefen, ob Label schon existiert */
      for(var k=0; k<names.length; k++) {
        var name = names[k][0];
        exists = name.localeCompare(label);
        if(exists === 0){
          break;
        }
      }
      if(exists != 0) {
        names.push([label, 0]);
      }
    }
  }
  console.assert(names.length > 0 , {names, errorMsg3});
  return names;
}

/* Zaehlt die Anzahl der Vorgaengerelemente */
function countPrecursors(graph, precursors) {
  for(var i=0; i<graph.length; i++) {
    var toIncrement = graph[i][1];
    for(var j=0; j<precursors.length; j++) {
      if(precursors[j][0].localeCompare(toIncrement) === 0) {
        precursors[j][1]++;
        break;
      }
    }
  }
  var testCounter = 0;
  for(var i=0; i<precursors.length; i++) {
    testCounter += precursors[i][1];
  }
  console.assert(testCounter > 0 , {testCounter, errorMsg4});
  return precursors;
}

/* Gehe durch die Elemente und gebe die Reihenfolge 
  der Topologie aus */
function findOrder(graph, precursors) {
  /* Als erstes testen wir, ob es Anfangsknoten gibt. Wenn nicht, Abbruch */
  var init = findInitialNode(precursors);
  
  if(init === 0) {
    return 0;
  }
  else {
    var order = [];
    while(order.length != precursors.length) {
      for(var i=0; i<precursors.length; i++) {
        if(precursors[i][1] === 0) {
          order.push(precursors[i][0]);
          precursors[i][1] = -1;
          
          /* Nachfolger durchgehen, Vorgaengerelemente reduzieren */
          for(var j=0; j<graph.length; j++) {
            if(graph[j][0].localeCompare(precursors[i][0]) === 0) {
              var name = graph[j][1];
              for(var k=0; k<precursors.length; k++) {
                if(precursors[k][0].localeCompare(name) === 0) {
                  precursors[k][1]-=1;
                  break;
                }
              }
            }
          }
        }
      }
    }
    return order;
  }
}

function findInitialNode(precursors) {
  var init = 0;
  for(var i=0; i<precursors.length; i++) {
    if(precursors[i][1] === 0) {
      init = 1;
      break;
    } 
  }
  console.assert(init === 1, {init, errorMsg2});
  return init;
}


/* Error Messages */
const errorMsg1 = "Der Graph hat keine Knoten."
const errorMsg2 = "Der Graph muss mindestens einen Anfangsknoten besitzen.";
const errorMsg3 = "Die Liste der Namen kann nicht leer sein.";
const errorMsg4 = "Die Graphen müssen so definiert sein, dass Relationen zwischen Knoten existieren.";

console.assert(topology.length > 0 , {topology, errorMsg1});
topSort(topology);