
var htmlString = '<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Plagiatsresolution</title></head><body><header><h2 class="field field--name-title field--type-ds field--label-hidden">Plagiatsresolution und -maßnahmen</h2></header><div class="content"> <a target="_blank" class="%export%" href="./load.php?target=assets%2Fhtml%2Fplagiatsresolution">PDF export</a> <span class="%exported%">%filemtime%</span> <div class="paragraphs-items paragraphs-items-field-pcf-content paragraphs-items-field-pcf-content-full paragraphs-items-full"> <div class="field field-name-field-pcf-content"> <div class="entity entity-paragraphs-item paragraphs-item-para-text"> <div class="field field--name-field-pf-text-wysiwyg field--type-text-long field--label-hidden"> <p> <strong>Resolution zum akademischen Ethos und zu den akademischen Standards</strong></p> <p> In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die Hochschule Bonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmen einzuleiten.</p> <p> 1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards.</p> <p> 2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohl über den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- und Denkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt.</p> <p> 3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden.</p> <p> Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.</p> <p> <strong>Eckpunkte zur Plagiatsprüfung</strong></p> <p> Der Senat empfiehlt:</p> <p> 1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss fester Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt.</p> <p> 2. Alle Abschlussarbeiten werden auf Plagiate geprüft.</p> <p> 3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.</p> <p> 4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht.</p> <p> 5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht.</p> <p> 6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.</p> <p> 7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule stichprobenartige Plagiatsprüfungen vor.</p> <p> <strong>Selbstverpflichtungserklärung der Studierenden:</strong></p> <p> Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind.</p> <p> "Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin."</p> </div> </div> </div> </div></div></article></body></html>';
var stopWords = ["ab", "aber", "alle", "allem", "allen", "aller", "allerdings", "als", "also", "am", "an", "andere", "anderem", "anderen", "anderer", "andernfalls", "anders", "andersherum", "anfangs", "anhand", "anschließend", "ansonsten", "anstatt", "auch", "auf", "aufgrund", "aus", "außerdem", "befindet", "bei", "beide", "beim", "beispielsweise", "bereits", "besonders", "besteht", "bestimmte", "bestimmten", "bestimmter", "bevor", "bietet", "bis", "bleiben", "bringen", "bringt", "bsp", "bzw", "d.h", "da", "dabei", "dafür", "daher", "damit", "danach", "dann", "dar", "daran", "darauf", "daraus", "darf", "darstellt", "darüber", "das", "dass", "davon", "dazu", "dem", "demzufolge", "den", "denen", "denn", "der", "deren", "des", "dessen", "desto", "die", "dies", "diese", "diesem", "diesen", "dieser", "dieses", "doch", "dort", "durch", "ebenfalls", "eher", "eigenen", "eigentlich", "ein", "eine", "einem", "einen", "einer", "eines", "einigen", "einiges", "einmal", "einzelnen", "entscheidend", "entweder", "er", "erstmals", "es", "etc", "etwas", "euch", "folgende", "folgendem", "folgenden", "folgender", "folgendes", "folgt", "für", "ganz", "gegen", "gehen", "gemacht", "genannte", "genannten", "gerade", "gerne", "gibt", "gilt", "gleich", "gleichen", "gleichzeitig", "habe", "haben", "hält", "hat", "hatte", "hätte", "hauptsächlich", "her", "heutigen", "hier", "hierbei", "hierfür", "hin", "hingegen", "hinzu", "hoch", "ihn", "ihr", "ihre", "ihren", "ihrer", "im", "immer", "immerhin", "in", "indem", "insgesamt", "ist", "ja", "je", "jede", "jedem", "jeder", "jedes", "jedoch", "jetzt", "jeweilige", "jeweiligen", "jeweils", "kam", "kann", "keine", "kommen", "kommt", "können", "konnte", "könnte", "konnten", "lassen", "lässt", "lautet", "lediglich", "leider", "letztendlich", "letztere", "letzteres", "liegt", "machen", "macht", "mal", "man", "mehr", "mehrere", "meine", "meinem", "meisten", "mich", "mit", "mithilfe", "mittels", "möchte", "möglich", "möglichst", "momentan", "muss", "müssen", "musste", "nach", "nachdem", "nächsten", "nahezu", "nämlich", "natürlich", "neue", "neuen", "nicht", "nichts", "noch", "nun", "nur", "ob", "obwohl", "oder", "oftmals", "ohne", "per", "sämtliche", "scheint", "schon", "sehr", "sein", "seine", "seinem", "seinen", "sich", "sicherlich", "sie", "siehe", "sind", "so", "sobald", "sofern", "solche", "solchen", "soll", "sollen", "sollte", "sollten", "somit", "sondern", "sorgt", "sowie", "sowohl", "später", "sprich", "statt", "trotz", "über", "überhaupt", "um", "und", "uns", "unter", "usw", "viel", "viele", "vielen", "völlig", "vom", "von", "vor", "vorerst", "vorher", "während", "war", "wäre", "waren", "warum", "was", "weil", "weitere", "weiteren", "weiterer", "weiteres", "weiterhin", "welche", "welchen", "welcher", "welches", "wenn", "wer", "werden", "wesentlich", "wichtige", "wichtigsten", "wie", "wieder", "wiederum", "will", "wir", "wird", "wirklich", "wo", "wobei", "worden", "wurde", "wurden", "z.b", "ziemlich", "zu", "zuerst", "zum", "zur", "zusätzlich", "zuvor", "zwar", "zwecks"];

function startAnalysis(string=htmlString, id="output") {
  // Filtern aller Tags
  var newString = string.replace(/(<([^>]+)>)/gi, " ");

  // Umwandeln in Array und Filtern aller leeren Werte
  var htmlArray = newString.split(" ").filter(word => word !== "" );

  // Filtern aller Stoppwords
  htmlArray = htmlArray.filter(filterStopwords)

  // Zaehlen der Worte
  var occurrences = htmlArray.reduce(countOccurrences, {});

  // Sortieren nach Value
  var sortedArray = [];
  for(let word in occurrences) {
    sortedArray.push([word, occurrences[word]]);
  }
  sortedArray.sort(function(x,y) {
    return y[1]-x[1];
  });

  // Reduktion auf die haeufigsten drei Begriffe
  var mostCommon = sortedArray.slice(0,3).reduce((acc, curr) => acc.concat(curr), []);

  // Entferne Zahlen aus dem Array
  var result = mostCommon.filter(x => isNaN(x));
  console.log(result);
  // Erwartet: ['akademischen', 'Ethos', 'Hochschule']
  
  // Einfügen in Textfeld
  var p = document.getElementById(id);
  p.innerHTML = result;
}

function startAnalysisCustom() {
	var string = document.getElementById("textInput").innerHTML;
	var id     = "output2";
	startAnalysis(string, id);
}

function filterStopwords(word) {
  let isStopWord = false;
  for(let i=0; i<stopWords.length; i++) {
    // Ignore case sensitivity
    if(word.toUpperCase() === stopWords[i].toUpperCase()) {
      isStopWord = true;
      break;
    }
  }
  if(!isStopWord) { 
    return word; 
  }
}

function countOccurrences(acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc;
}
