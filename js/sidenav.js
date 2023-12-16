
$(function () {


	$('body').on('click', '#sidenav_toggle', function(event){
		$('.content').toggleClass('left-80');
        $('.sidenav-container').toggleClass('collapse');
	});

});