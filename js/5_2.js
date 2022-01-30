//Vollständige Eigenleistung
var timer;

window.onload = function() {
	var input = document.getElementById("neuerRedner");
	input.addEventListener("keydown", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("neuerRednerButton").click();
		}
	});
}

function addSpeaker() {
	var ul = document.getElementById("rednerListe");
	var li = document.createElement("li");
	var speakerName = document.getElementById("neuerRedner").value;

	// Create Time
	var labelHours     = document.createElement("label");
	var labelMinutes   = document.createElement("label");
	var labelSeconds   = document.createElement("label");
	var labelColon1    = document.createElement("label");
	var labelColon2    = document.createElement("label");
	
	labelHours.id          = "hours_"+speakerName;
	labelHours.className   = "labelHours";
	labelHours.innerHTML   = "00";
	
	labelMinutes.id        = "minutes_"+speakerName;
	labelMinutes.innerHTML = "00";
	
	labelSeconds.id        = "seconds_"+speakerName;
	labelSeconds.innerHTML = "00";
	
	labelColon1.id         = "colon1_"+speakerName;
	labelColon2.id         = "colon2_"+speakerName;
	labelColon1.innerHTML  = ":";
	labelColon2.innerHTML  = ":";
	
	// Create Button to start Timer
	var newButton = document.createElement("button");
	newButton.innerHTML = "Stop!";
	newButton.className = "rednerButton";
	newButton.setAttribute("id", "button_"+speakerName);
	newButton.setAttribute("onClick", "toggleTimer(this)");
	newButton.setAttribute("style", "margin-left: 5px");	
	
	
	li.appendChild(document.createTextNode(speakerName));
	li.appendChild(labelHours);
	li.appendChild(labelColon1);
	li.appendChild(labelMinutes);
	li.appendChild(labelColon2);
	li.appendChild(labelSeconds);
	li.appendChild(newButton);
	li.setAttribute("id", "list_"+speakerName);
	
	ul.appendChild(li);
	
	// Stop all other timers, flip buttons
	clearInterval(timer);
	toggleButtons(newButton);
	
	// Start new Timer immediately
	timer = setInterval( function() { setTime(newButton); }, 1000 );
}

function toggleButtons(elem) {
	var allButtons = document.getElementsByClassName("rednerButton");
	for(var i = 0; i<allButtons.length; i++)
	{
		if (allButtons[i].innerHTML === "Stop!" &&
			allButtons[i].id !== elem.id) 
		{
			toggleTimer(allButtons[i]);
		}
	}
}

function toggleTimer(elem) {
	// Change Label of the Button
	if (elem.innerHTML === "Start!") 
	{
		elem.innerHTML = "Stop!";
		toggleButtons(elem);
		timer = setInterval( function() { setTime(elem); }, 1000 );
	}
	else 
	{
		elem.innerHTML = "Start!";
		clearInterval(timer);
	}
}	
	
function setTime(elem)
{
	var id = elem.id;
	var name = id.replace('button_','');
	
	var labelHours = document.getElementById("hours_" + name);
	var labelMinutes = document.getElementById("minutes_" + name);
	var labelSeconds = document.getElementById("seconds_" + name);
	
	// Get passed time
	var hours = labelHours.innerHTML;
	var minutes = labelMinutes.innerHTML;
	var seconds = labelSeconds.innerHTML;
	
	// Convert it into seconds 
	var secondsPassed = parseInt(hours*3600) + parseInt(minutes*60) + parseInt(seconds);
	++secondsPassed;
	
	// Update
	labelSeconds.innerHTML = pad(secondsPassed%60);
	labelMinutes.innerHTML = pad(parseInt(secondsPassed/60));
	labelHours.innerHTML   = pad(parseInt(totalSeconds / 3600));
}

function pad(val)
{
	var valString = val + "";
	if (valString.length < 2)
	{
		return "0" + valString;
	}
	else 
	{
		return valString;
	}
}