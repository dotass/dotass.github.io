(function (window, $) {
	'use strict';

	var $div = $('div');

	function byeBye() {
		$(this).fadeOut('slow');
	};

	$div.on('click', byeBye);

})(window, $);