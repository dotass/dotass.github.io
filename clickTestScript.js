$(document).ready(function() {
	
	var clickNum = 0;
	
	$('div').click(function() {
		clickNum = clickNum + 1;
		
		$('#fullscreen').text(clickNum);
	});	
});

