$( document ).ready(function() {
	$("#greeting").hide();
});

function clearAnswer() {
	let answerElement = document.getElementById('answer');
	try {   
	    answerElement.value = '';
        } catch (error) {
	    console.error('Error evaluating expression:', error);
            answerElement.value = 'Error';
        }
	var div = document.getElementById('greeting');
	if (div.style.display == 'block') {
		div.style.display = 'none';
	};
}

function appendToAnswer(value) {
	document.getElementById('answer').value += value;
}

function calculateResult() {
        let answerElement = document.getElementById('answer');
        try {
            answerElement.value = eval(answerElement.value);
        } catch (error) {
	    console.error('Error evaluating expression:', error);
            answerElement.value = 'Error';
        }
	var div = document.getElementById('greeting');
	if (div.style.display == 'none') {
		div.style.display = 'block';
	};
}


