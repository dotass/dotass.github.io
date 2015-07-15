function clickTestScript(window, $) {
	'use strict';

	var $rollButton = $('.roll-button');
	var $diceCount = $('.dice-count');
	var $diceSize = $('.dice-size');

	var diceSize = 0;
	var diceQuantity = 0;

	function rollIt() {
		diceQuantity = $('.active-number-of-dice').getAttribute('data-dice-quantity');
		diceSize = $('.active-dice-capacity').getAttribute('data-dice-size');

		var diceResults = rollDice();
	};

	function setDiceCount() {
		$('.active-number-of-dice').removeClass('active-number-of-dice');
		$('#dice-results').text("Debug text: "+this);
		$(this).addClass('active-number-of-dice');
	};

	function setDiceSize() {
		$('.active-dice-capacity').removeClass('active-dice-capacity');
		$('#dice-results').text("Debug text: "+this);
		$(this).addClass('active-dice-capacity');
	};

	function rollDice() {
		var diceRollTotal = 0;

		for(var i = 0; i < diceQuantity; i++) {
			var tempRoll = Math.floor(Math.random() * diceSize + 1);

			diceRollTotal = diceRollTotal + tempRoll;
		};
		$('#dice-results').text("The computer rolled "+diceQuantity+"d"+diceSize+", and rolled a "+diceRollTotal+".");
	};

	$rollButton.on('click', rollIt());
	$diceCount.on('click', setDiceCount());
	$diceSize.on('click', setDiceSize());
};

$(document).ready(clickTestScript.bind({}, window, $));