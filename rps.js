$(document).ready(function() {

	var hitPoints = 10;
	var experience = 0;
	var loseHitPoints = function() {
		hitPoints = hitPoints -1;
		if(hitPoints === 0)
		{

			$('.activeRock').off('click', rpsRockChoice);
			$('.activePaper').off('click', rpsPaperChoice);
			$('.activeScissors').off('click', rpsScissorsChoice);

			$('#rock').fadeOut('slow');
			$('#paper').fadeOut('slow');
			$('#scissors').fadeOut('slow');

			$('#RPSresults').text("GAME OVER");
			if(experience === 10)
			{
				$('#gameOverText').text("Win some, lose some, tie some. Hooray!");
			}
			else if(experience > 10)
			{
				$('#gameOverText').text("Luck is with you today!");
			}
			else
			{
				$('#gameOverText').text("Next time... do what Bart Simpson does.");
			}
		};
	};

	var rpsRockChoice = function() {
		var computerChoice = Math.random();

		if (computerChoice < 0.34) {
			computerChoice = "rock";
			$('#RPSresults').text("You chose rock and the computer chose rock. It's a tie!");
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
			$('#RPSresults').text("You chose rock and the computer chose paper. You lose, for some reason!");
			loseHitPoints();
			$('#hitpoints').text(hitPoints);

		} else {
			computerChoice = "scissors";
			$('#RPSresults').text("You chose rock and the computer chose scissors. Bash, bash, bash. Win, win, win!");
			experience = experience + 1;
			$('#experience').text(experience);
		};
	};

	var rpsPaperChoice = function() {
		var computerChoice = Math.random();

		if (computerChoice < 0.34) {
			computerChoice = "rock";
			$('#RPSresults').text("You chose paper and the computer chose rock. You win, for some reason!");
			experience = experience + 1;
			$('#experience').text(experience);
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
			$('#RPSresults').text("You chose paper and the computer chose paper. It's a tie!");
		} else {
			computerChoice = "scissors";
			$('#RPSresults').text("You chose paper and the computer chose scissors. Snip, snip - LOSE!");
			loseHitPoints();
			$('#hitpoints').text(hitPoints);

		};
	};

	var rpsScissorsChoice = function() {

		var computerChoice = Math.random();

		if (computerChoice < 0.34) {
			computerChoice = "rock";
			$('#RPSresults').text("You chose scissors and the computer chose rock. Bash, bash - LOSE!");
			loseHitPoints();
			$('#hitpoints').text(hitPoints);
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
			$('#RPSresults').text("You chose scissors and the computer chose paper. Snip, snip - WIN!");
			experience = experience + 1;
			$('#experience').text(experience);
		} else {
			computerChoice = "scissors";
			$('#RPSresults').text("You chose scissors and the computer chose scissors. It's a tie!");
		};
	};

	$('.activeRock').on('click', rpsRockChoice);
	$('.activePaper').on('click', rpsPaperChoice);
	$('.activeScissors').on('click', rpsScissorsChoice);
});

