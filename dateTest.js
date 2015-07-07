$(document).ready(function() {

	var convertMonth = function(month) {
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

	var d1 = new Date();
	var monthNumber = d1.getMonth();

	var dateString = convertMonth(monthNumber)+" "+d1.getDate()+", "+d1.getFullYear()+".";

	var currentTime = function() {
		var d2 = new Date();
		var timeString = d2.getHours()+":"+d2.getMinutes()+":"+d2.getSeconds();
		var timeOpen = Math.floor((d2 - d1)/1000)+" seconds.";

		$('#p-time').text(timeString);
		$('#p-date').text(dateString);
		$('#p-loaded-time').text(timeOpen);
	};

	currentTime();

	setInterval(function() {currentTime()}, 1000);

	var verticalHeight = function(window, $) {
	    'use strict';

	    $('.vertical-center').each(function () {
	        var $this = $(this),
	            $child = $this.children(':first'),
	            outerHeight = $this.height(),
	            innerHeight = $child.height();

	        $child.css({position: 'relative', top: '50%', marginTop: '-' + (innerHeight / 2) + 'px'})
	    });
	};

	verticalHeight(window, $);

	var resizeHeight = function() {
		verticalHeight(window, $);
	};

	$(window).on('resize', function() { resizeHeight() });
});

