(function (window, $) {
	'use strict';

	var $clicker = $('#clicker'),
		$clickResults = $('#click-results'),
		clickNum = 0;

	function clickUp() {
		clickNum = clickNum + 1;
		$clickResults.text(clickNum);
	};

	$clicker.on('click', clickUp);

})(window, $);
