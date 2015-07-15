function clickTestScript(window, $) {
	'use strict';

	var $rollButton = $('.roll-button');
	var $diceCount = $('.dice-count');
	var $diceSize = $('.dice-size');

	var diceSize = 6;
	var diceQuantity = 1;

	function rollIt() {
		var diceResults = rollDice();
	};

	function setDiceCount() {
		$('.active-number-of-dice').removeClass('active-number-of-dice');
		$(this).addClass('active-number-of-dice');
		diceQuantity = $(this).attr('data-dice-quantity');
	};

	function setDiceSize() {
		$('.active-dice-capacity').removeClass('active-dice-capacity');
		$(this).addClass('active-dice-capacity');
		diceSize = $(this).attr('data-dice-size');
	};

	function rollDice() {
		var diceRollTotal = 0;

		for(var i = 0; i < diceQuantity; i++) {
			var tempRoll = Math.floor(Math.random() * diceSize + 1);

			diceRollTotal = diceRollTotal + tempRoll;
		};
		$('#dice-results').text("The computer rolled "+diceQuantity+"d"+diceSize+", and rolled a "+diceRollTotal+".");
	};

	$rollButton.on('click', rollIt);
	$diceCount.on('click', setDiceCount);
	$diceSize.on('click', setDiceSize);
};

$(document).ready(clickTestScript.bind({}, window, $));