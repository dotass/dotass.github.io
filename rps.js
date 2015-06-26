$(document).ready(function() {

	var hitPoints = 100;
	var experience = 0;

	$('#rock').click(function() {

		var computerChoice = Math.random();

		if (computerChoice < 0.34) {
			computerChoice = "rock";
			$('#RPSresults').text("You chose rock and the computer chose rock. It's a tie!");
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
			$('#RPSresults').text("You chose rock and the computer chose paper. You lose, for some reason!");
			hitPoints = hitPoints - 1;
			$('#hitpoints').text(hitPoints);

		} else {
			computerChoice = "scissors";
			$('#RPSresults').text("You chose rock and the computer chose scissors. Bash, bash, bash. Win, win, win!");
			experience = experience + 1;
			$('#experience').text(experience);
		};
	});

	$('#paper').click(function() {

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
			hitPoints = hitPoints - 1;
			$('#hitpoints').text(hitPoints);

		};
	});

	$('#scissors').click(function() {

		var computerChoice = Math.random();

		if (computerChoice < 0.34) {
			computerChoice = "rock";
			$('#RPSresults').text("You chose scissors and the computer chose rock. Bash, bash - LOSE!");
			hitPoints = hitPoints - 1;
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
	});
/*
	$('.left').click(function() {
		$('#RPSresults').text('This debug text says you clicked on the left div!');
	});

	$('.right').click(function() {
		$('#RPSresults').text('This debug text says you clicked on the right div!');
	});

	$('#footer').click(function() {
		$('#RPSresults').text('This debug text says you clicked on the footer div!');
	});
*/


});

