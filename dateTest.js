(function (window, $) {
	'use strict';

	var $pTime = $('#p-time'),
		$pDate = $('#p-date'),
		$pLoadedTime = $('#p-loaded-time'),
		$verticalCenter = $('.vertical-center'),
		d1 = new Date(),
		monthNumber = d1.getMonth(),
		dateString = convertMonth(monthNumber)+" "+d1.getDate()+", "+d1.getFullYear()+".";

		function convertMonth(month) {
		switch(month) {
			case 0:
				return "January";
			case 1:
				return "February";
			case 2:
				return "March";
			case 3:
				return "April";
			case 4:
				return "May";
			case 5:
				return "June";
			case 6:
				return "July";
			case 7:
				return "August";
			case 8:
				return "September";
			case 9:
				return "October";
			case 10:
				return "November";
			case 11:
				return "December";
			}
		};

		function currentTime() {
			var d2 = new Date(),
				timeString = d2.getHours()+":"+d2.getMinutes()+":"+d2.getSeconds(),
				timeOpen = Math.floor((d2 - d1)/1000)+" seconds.";

			$pTime.text(timeString);
			$pDate.text(dateString);
			$pLoadedTime.text(timeOpen);
		};

		function verticalHeight(window, $) {
		    'use strict';

		    $verticalCenter.each(function () {
		        var $this = $(this),
		            $child = $this.children(':first'),
		            outerHeight = $this.height(),
		            innerHeight = $child.height();

		        $child.css({position: 'relative', top: '50%', marginTop: '-' + (innerHeight / 2) + 'px'})
		    });
		};

		function resizeHeight() {
			verticalHeight(window, $);
		};

	currentTime();
	setInterval(function() {currentTime()}, 980);
	verticalHeight(window, $);
	$(window).on('resize', function() { resizeHeight() });

})(window, $);