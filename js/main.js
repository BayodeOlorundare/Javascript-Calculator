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

