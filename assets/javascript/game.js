//Set variables//
var counter = 0;
var wins = 0;
var losses = 0;
var addition = 0;
$('#win').text(wins);
$('#loss').text(losses);


//Pick a random number from 19-120//

var total = Math.floor((Math.random()* 100) + 19);

//Random values for each crystal 1-12//
var red = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);

// On Click funtions for crystals//

crystals = ['assets/images/red.png', 'assets/images/yellow.png','assets/images/green.png', 'assets/images/blue.png'];

$(document).ready(function() {
	$('#red').click(function() {
		addition = addition + red;
		logic();
	})
	$('#blue').click(function() {
		addition = addition + blue;
		logic();
	})
	$('#yellow').click(function() {
		addition = addition + yellow;
		logic();
	})
	$('#green').click(function() {
		addition = addition + green;
		logic();
	})
});


//reset game//

var reset = function() {
	addition = 0;
	total = Math.floor((Math.random()* 100) + 19);
	$('#total').empty();
	$('#total').append(total);

	red = Math.floor((Math.random()* 12) + 1);
	yellow = Math.floor((Math.random()* 12) + 1);
	green = Math.floor((Math.random()* 12) + 1);
	blue = Math.floor((Math.random()* 12) + 1);
	alert('reset');
	updateAddition();
}


//addition//

var updateAddition = function () {
	$('#addition').empty();
	$('#addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);

}