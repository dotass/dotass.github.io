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

	var d = new Date();
	var monthNumber = d.getMonth();

	var dateString = convertMonth(monthNumber)+" "+d.getDate()+", "+d.getFullYear()+".";

	var currentTime = function() {
		var d = new Date();
		var timeString = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

		$('#p-time').text(timeString);
	};


	$('#p-date').text(dateString);
	currentTime();

	setInterval(function() {currentTime()}, 5000);

});
