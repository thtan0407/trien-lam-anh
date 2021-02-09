// Function thông báo
var call_noti = function (msg, type, time, position) {
	if (typeof time === 'undefined' || isNaN(time))
		time = 3000;
	toastr.options.timeOut = time;
	toastr.options.extendedTimeOut = time;
	if (position)
		toastr.options.positionClass = position;
	else if ($(window).width() < 765)
		toastr.options.positionClass = "toast-bottom-full-width";
	toastr[type](msg);
};

$(document).ready(function () {
})