$(document).ready(function() {

	var clickNum = 0;

	$('#clicker').click(function() {
		clickNum = clickNum + 1;

		$('#full-screen').text(clickNum);
	});
});

