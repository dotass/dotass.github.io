(function (window, $) {
	'use strict';

	var $rollButton = $('.roll-button'),
	    $diceCount = $('.dice-count'),
	    $diceSize = $('.dice-size'),
	    $diceResults = $('#dice-results'),
	    $individualDiceResults = $('#individual-dice-results'),
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
			tempRoll,
			individualDiceRoll = [],
			individualDiceResults = "";

		for(i = 0; i < diceQuantity; i++) {
			tempRoll = Math.floor(Math.random() * diceSize + 1);
			individualDiceRoll.push(tempRoll);
			diceRollTotal = diceRollTotal + tempRoll;
		};
		$diceResults.text("The computer rolled "+diceQuantity+"d"+diceSize+", and rolled a "+diceRollTotal+".");

		for(i = 0; i < individualDiceRoll.length; i++) {
			if(i >= 1) {
				if(i == individualDiceRoll.length - 1) {
					individualDiceResults = individualDiceResults.concat(", and ");
				}
				else individualDiceResults = individualDiceResults.concat(", ");
			}
			individualDiceResults = individualDiceResults.concat(individualDiceRoll[i]);
		};
		individualDiceResults = individualDiceResults.concat(".");
		logResults(diceRollTotal, individualDiceResults);
	};

	function logResults(diceRollTotal, individualDiceResults) {
		var d = new Date();
		$individualDiceResults.prepend("<li>"+d.toUTCString()+" - Rolled "+diceQuantity+"d"+diceSize+", with a result of: "+diceRollTotal+". Individual rolls: "+individualDiceResults);
	};

	$rollButton.on('click', rollDice);
	$diceCount.on('click', setDiceCount);
	$diceSize.on('click', setDiceSize);

})(window, $);