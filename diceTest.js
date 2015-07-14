function clickTestScript(window, $) {
	'use strict';

	var $rollButton = $('.roll-button');
	var $diceCount = $('.dice-count');
	var $diceSize = $('.dice-size');

	var diceSize = 0;
	var diceQuantity = 0;

	function rollIt() {
		diceQuantity = document.getElementById('active-number-of-dice').getAttribute('data-dice-quantity');
		diceSize = document.getElementById('active-dice-capacity').getAttribute('data-dice-size');

		var diceResults = rollDice();
	};

	$('.dice-count').click(function() {
		$('#active-number-of-dice').removeAttr('id');
		$(this).attr('id', 'active-number-of-dice');
	});

	$('.dice-size').click(function() {
		$('#active-dice-capacity').removeAttr('id');
		$(this).attr('id', 'active-dice-capacity');
	});

	function rollDice() {
		var diceRollTotal = 0;

		for(var i = 0; i < diceQuantity; i++) {
			var tempRoll = Math.floor(Math.random() * diceSize + 1);

			diceRollTotal = diceRollTotal + tempRoll;
		};
		$('#dice-results').text("The computer rolled "+diceQuantity+"d"+diceSize+", and rolled a "+diceRollTotal+".");
	};

	$rollButton.on('click', function() { rollIt() });

};

$(document).ready(clickTestScript.bind({}, window, $));