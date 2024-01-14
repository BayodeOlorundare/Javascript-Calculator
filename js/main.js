$( document ).ready(function() {
	$("#greeting").hide();
});

function clearAnswer() {
	document.getElementById('answer').value = '';
	var div = document.getElementById('greeting');
	if (div.style.display == 'block') {
		div.style.display = 'none';
	};
}

function appendToAnswer(value) {
	document.getElementById('answer').value += value;
}

function calculateResult() {
        document.getElementById('answer').value = eval(document.getElementById('answer').value);
	var div = document.getElementById('greeting');
	if (div.style.display == 'none') {
		div.style.display = 'block';
	};
}


