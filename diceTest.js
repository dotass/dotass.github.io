(function (window, $) {
	'use strict';

	var $rollButton = $('.roll-button'),
	    $diceCount = $('.dice-count'),
	    $diceSize = $('.dice-size'),
	    $diceResults = $('#dice-results'),
	    diceSize = 6,
	    diceQuantity = 1;

	function setDiceCount() {
		$diceCount.removeClass('active-number-of-dice');
		$(this).addClass('active-number-of-dice');
		diceQuantity = $(this).attr('data-dice-quantity');
	};

	function setDiceSize() {
		$diceSize.removeClass('active-dice-capacity');
		$(this).addClass('active-dice-capacity');
		diceSize = $(this).attr('data-dice-size');
	};

	function rollDice() {
		var diceRollTotal = 0,
			i,
			tempRoll;

		for(i = 0; i < diceQuantity; i++) {
			tempRoll = Math.floor(Math.random() * diceSize + 1);

			diceRollTotal = diceRollTotal + tempRoll;
		};
		$diceResults.text("The computer rolled "+diceQuantity+"d"+diceSize+", and rolled a "+diceRollTotal+".");
	};

	$rollButton.on('click', rollDice);
	$diceCount.on('click', setDiceCount);
	$diceSize.on('click', setDiceSize);

})(window, $);