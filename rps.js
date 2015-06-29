$(document).ready(function() {

	var hitPoints = 10;
	var experience = 0;
	var loseHitPoints = function() {
		hitPoints = hitPoints -1;
		if(hitPoints === 0)
		{

			$('.active-rock').off('click', rpsRockChoice);
			$('.active-paper').off('click', rpsPaperChoice);
			$('.active-scissors').off('click', rpsScissorsChoice);

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
				$('#game-over-text').text("Next time... do what Bart Simpson does.");
			}
		};
	};

	var rpsRockChoice = function() {
		var computerChoice = Math.random();

		if (computerChoice < 0.34) {
			computerChoice = "rock";
			$('#rps-results').text("You chose rock and the computer chose rock. It's a tie!");
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
			$('#rps-results').text("You chose rock and the computer chose paper. You lose, for some reason!");
			loseHitPoints();
			$('#hit-points').text(hitPoints);

		} else {
			computerChoice = "scissors";
			$('#rps-results').text("You chose rock and the computer chose scissors. Bash, bash, bash. Win, win, win!");
			experience = experience + 1;
			$('#experience').text(experience);
		};
	};

	var rpsPaperChoice = function() {
		var computerChoice = Math.random();

		if (computerChoice < 0.34) {
			computerChoice = "rock";
			$('#rps-results').text("You chose paper and the computer chose rock. You win, for some reason!");
			experience = experience + 1;
			$('#experience').text(experience);
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
			$('#rps-results').text("You chose paper and the computer chose paper. It's a tie!");
		} else {
			computerChoice = "scissors";
			$('#rps-results').text("You chose paper and the computer chose scissors. Snip, snip - LOSE!");
			loseHitPoints();
			$('#hit-points').text(hitPoints);

		};
	};

	var rpsScissorsChoice = function() {

		var computerChoice = Math.random();

		if (computerChoice < 0.34) {
			computerChoice = "rock";
			$('#rps-results').text("You chose scissors and the computer chose rock. Bash, bash - LOSE!");
			loseHitPoints();
			$('#hit-points').text(hitPoints);
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
			$('#rps-results').text("You chose scissors and the computer chose paper. Snip, snip - WIN!");
			experience = experience + 1;
			$('#experience').text(experience);
		} else {
			computerChoice = "scissors";
			$('#rps-results').text("You chose scissors and the computer chose scissors. It's a tie!");
		};
	};

	$('.active-rock').on('click', rpsRockChoice);
	$('.active-paper').on('click', rpsPaperChoice);
	$('.active-scissors').on('click', rpsScissorsChoice);
});

