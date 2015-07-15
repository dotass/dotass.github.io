(function (window, $) {
	'use strict';

	var $activeRock = $('.active-rock'),
		$activePaper = $('.active-paper'),
		$activeScissors = $('.active-scissors'),
		$rockID = $('#rock'),
		$paperID = $('#paper'),
		$scissorsID = $('#scissors'),
		$rpsResults = $('#rps-results'),
		$gameOverText = $('#game-over-text'),
		$experienceID = $('#experience'),
		$hitPointsID = $('#hit-points'),
		hitPoints = 10,
		experience = 0,
		rockClickChoice,
		paperClickChoice,
		scissorsClickChoice;

	function loseHitPoints() {
		hitPoints = hitPoints -1;
		if(hitPoints === 0)
		{

			$activeRock.off('click', rockClickChoice);
			$activePaper.off('click', paperClickChoice);
			$activeScissors.off('click', scissorsClickChoice);

			$rockID.fadeOut('slow');
			$paperID.fadeOut('slow');
			$scissorsID.fadeOut('slow');

			$rpsResults.text("GAME OVER");
			if(experience === 10)
			{
				$gameOverText.text("Win some, lose some, tie some. Hooray!");
			}
			else if(experience > 10)
			{
				$gameOverText.text("Luck is with you today!");
			}
			else
			{
				$gameOverText.text("Next time, Gadget. Next time!");
			}
		};
	};

	function rpsComputerChoice() {
		var myChoice = Math.floor(Math.random() * (3) + 1);

		switch(myChoice) {
			case 1:
				return "rock";
			case 2:
				return "paper";
			case 3:
				return "scissors";
		}
	};

	function rpsPlayerChoice(playerChoice) {
		var computerChoice = rpsComputerChoice(),
			results;

		$rpsResults.text("Player choice is being passed through. It is "+playerChoice+".");

		results = compareChoice(playerChoice, computerChoice);

		if(results === "win")
		{
			$rpsResults.text("You chose "+playerChoice+" and the computer chose "+computerChoice+". You win!");
			experience = experience + 1;
			$experienceID.text(experience);
		}
		else if(results === "lose")
		{
			$rpsResults.text("You chose "+playerChoice+" and the computer chose "+computerChoice+". You lose!");
			loseHitPoints();
			$hitPointsID.text(hitPoints);
		}
		else if(results === "tie")
		{
			$rpsResults.text("You both chose "+playerChoice+". It's a tie!");
		}

	};

	function compareChoice(playerChoice, computerChoice) {

		if(playerChoice === computerChoice) {
			return "tie";
		}
		else if((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
			return "win";
		}
		else return "lose";

	};

	rockClickChoice = function() { rpsPlayerChoice("rock") };
	paperClickChoice = function() { rpsPlayerChoice("paper") };
	scissorsClickChoice = function() { rpsPlayerChoice("scissors") };

	$activeRock.on('click', rockClickChoice);
	$activePaper.on('click', paperClickChoice);
	$activeScissors.on('click', scissorsClickChoice);

})(window, $);