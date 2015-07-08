function clickTestScript(window, $) {
	'use strict';

	var clickNum = 0;

	$('#clicker').click(function() {
		clickNum = clickNum + 1;

		$('#click-results').text(clickNum);
	});
};

$(document).ready(clickTestScript.bind({}, window, $));

