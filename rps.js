function rps(window, $) {
	'use strict';

	var hitPoints = 10;
	var experience = 0;

	var loseHitPoints = function() {
		hitPoints = hitPoints -1;
		if(hitPoints === 0)
		{

			$('.active-rock').off('click', rockClickChoice);
			$('.active-paper').off('click', paperClickChoice);
			$('.active-scissors').off('click', scissorsClickChoice);

			$('#rock').fadeOut('slow');
			$('#paper').fadeOut('slow');
			$('#scissors').fadeOut('slow');

			$('#rps-results').text("GAME OVER");
			if(experience === 10)
			{
				$('#game-over-text').text("Win some, lose some, tie some. Hooray!");
			}
			else if(experience > 10)
			{
				$('#game-over-text').text("Luck is with you today!");
			}
			else
			{
				$('#game-over-text').text("Next time, Gadget. Next time!");
			}
		};
	};

	var rpsComputerChoice = function () {
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

	var rpsPlayerChoice = function(playerChoice) {
		var computerChoice = rpsComputerChoice();

		$('#rps-results').text("Player choice is being passed through. It is "+playerChoice+".");

		var results = compareChoice(playerChoice, computerChoice);

		if(results === "win")
		{
			$('#rps-results').text("You chose "+playerChoice+" and the computer chose "+computerChoice+". You win!");
			experience = experience + 1;
			$('#experience').text(experience);
		}
		else if(results === "lose")
		{
			$('#rps-results').text("You chose "+playerChoice+" and the computer chose "+computerChoice+". You lose!");
			loseHitPoints();
			$('#hit-points').text(hitPoints);
		}
		else if(results === "tie")
		{
			$('#rps-results').text("You both chose "+playerChoice+". It's a tie!");
		}

	};

	var compareChoice = function(playerChoice, computerChoice) {

		if(playerChoice === computerChoice) {
			return "tie";
		}
		else if((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
			return "win";
		}
		else return "lose";

	};

	var rockClickChoice = function() { rpsPlayerChoice("rock") };
	var paperClickChoice = function() { rpsPlayerChoice("paper") };
	var scissorsClickChoice = function() { rpsPlayerChoice("scissors") };

	$('.active-rock').on('click', rockClickChoice);
	$('.active-paper').on('click', paperClickChoice);
	$('.active-scissors').on('click', scissorsClickChoice);
};

$(document).ready(rps.bind({}, window, $));