$( document ).ready(function() {
	$("#greeting").hide();
});

var button = document.getElementById('show');
var button2 = document.getElementById('clear');

button.onclick = function() {   
	var div = document.getElementById('greeting');
	if (div.style.display == 'none') {
		div.style.display = 'block';
	};
};

button2.onclick = function() {   
	var div = document.getElementById('greeting');
	if (div.style.display == 'block') {
		div.style.display = 'none';
	};
};
function clearAnswer() {
	document.getElementById('answer').value = '';
}

function appendToAnswer(value) {
	document.getElementById('answer').value += value;
}

function calculateResult() {
	document.getElementById('answer').value = eval(document.getElementById('answer').value);
}


