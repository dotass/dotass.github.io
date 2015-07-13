function clickTestScript(window, $) {
	'use strict';

	$('.roll-button').click(function() {
		var diceQuantity = $('#active-number-of-dice').children().text();
		var diceSizeText = $('#active-dice-capacity').children().text();

		var diceSize = 0;

		if(diceSizeText.length === 2) {
			diceSize = diceSizeText[1];
		}
		else diceSize = diceSizeText.substr(1,2);

		var diceResults = rollDice(diceQuantity, diceSize);
	});

	$('.dice-count').click(function() {
		$('#active-number-of-dice').removeAttr('id');
		$(this).attr('id', 'active-number-of-dice');
	});

	$('.dice-size').click(function() {
		$('#active-dice-capacity').removeAttr('id');
		$(this).attr('id', 'active-dice-capacity');
	});

	function rollDice(diceQuantity, diceSize) {
		var diceRollTotal = 0;

		for(var i = 0; i < diceQuantity; i++) {
			var tempRoll = Math.floor(Math.random() * diceSize + 1);

			diceRollTotal = diceRollTotal + tempRoll;
		};
		$('#dice-results').text("The computer rolled "+diceQuantity+"d"+diceSize+", and rolled a "+diceRollTotal+".");
	};
};

$(document).ready(clickTestScript.bind({}, window, $));