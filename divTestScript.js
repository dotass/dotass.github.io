function divTestScript(window, $) {
	'use strict';

	$('div').click(function() {
		$(this).fadeOut('slow');
	});
};

$(document).ready(divTestScript.bind({}, window, $));