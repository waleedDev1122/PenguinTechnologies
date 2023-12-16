$(document).on('submit', 'form.getInTouchForm', function() {
        $(".submit-button").prop('disabled', true);
        $.ajax({
            url : 'https://us-central1-static-website-backend.cloudfunctions.net/get-in-touch',
            type    : 'POST',
            dataType: 'json',
            data    : JSON.stringify($(this).serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {})),
            contentType: 'application/json',
        })
        .done( function (data, status) {
            $('.title_text').each(function() {
               $(this).html('Thank you!');
            });
            $( ".subtitle_text" ).html('Our team will get back to you within 1-2 business days.');
            $(".fieldset").prop('disabled', true);
            $("html, body").animate({ scrollTop: 0 }, "slow");
        })
        .fail( function (data, status) {
            $('.title_text').each(function() {
               $(this).html('Thank you!');
            });
            $( ".subtitle_text" ).html('Our team will get back to you within 1-2 business days.');
            $(".fieldset").prop('disabled', true);
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
        return false;
    });

$(function () {

	var jobsJson = [
		{
			"title": "Microsoft Azure",
			"subtitle": "Azure Certified<br>Developer",
			"bg": "bg-yellow",
			"joblink": "https://www.linkedin.com/jobs/view/2741940141/",
		},
		{
			"title": "Java Developer",
			"subtitle": "Entry Level Java/Spring<br> Developer",
			"bg": "bg-yellow",
			"joblink": "https://docs.google.com/forms/d/e/1FAIpQLSftZa6JHH1jeu_A2oTchXhSt130i6a45t3I3hGpOhFcxvfWWg/viewform?usp=sf_link",
		},
		{
			"title": "Java Developer",
			"subtitle": "Senior Java/Spring<br> Developer",
			"bg": "bg-yellow",
			"joblink": "https://docs.google.com/forms/d/e/1FAIpQLSc4DOLfNVI9_0BRcW7R99h8DBCghiqiZaKPJBdZRwXOKw9DIA/viewform?usp=sf_link",
		},
	]

	"use strict";
	$(window).ready(function () {

		$("#jobs_input").click(function (){
			$('html, body').animate({
				scrollTop: $("#jobs_section").offset().top
			}, 1000);
		});

		$("#jobs_input_mobile").click(function (){
			$('html, body').animate({
				scrollTop: $("#jobs_section").offset().top
			}, 1000);
		});
		$(jobsJson).each(function (i, k) {
			$('#carousal').append("<div id=\"desktop_circle\" class=\"circle-section-max-width mx-1 h-100 d-inline-block \">" +
				"<div class=\" " + k['bg'] + " job-circle mt-5 mx-auto row no-gutters position-relative\">" +
				"<div class=\"my-auto mx-auto z-3\">" +
				"<p class=\"_display_1 text-center m-0 RubikRegular\"> " + k['title'] + " </p>" +
				"<p class=\"_display_2_plus mt-2 text-center RubikRegular\"> " + k['subtitle'] + " </p>" +
				"</div>" +
				"<a class=\"bottom-0 _display_2 RubikRegular position-absolute row apply-btn-m no-gutters w-100\"  href=\"" + k['joblink'] + "\" target=\"_blank\"> <span class=\"mx-auto bg-btn px-3 border-radius-25 text-white bottom-0 z-3\">Apply</span> </a>" +
				"</div>" +
				"</div>");
		});

		$(jobsJson).each(function (i, k) {
			$('#carousal_mobile').append("<div id=\"mobile_circle\" class=\"circle-section-max-width mx-1 h-100 d-inline-block \">" +
				"<div class=\" " + k['bg'] + " job-circle mt-5 mx-auto row no-gutters position-relative\">" +
				"<div class=\"my-auto mx-auto z-3\">" +
				"<p class=\"_display_1 text-center m-0 RubikRegular\"> " + k['title'] + " </p>" +
				"<p class=\"_display_2_plus mt-2 text-center RubikRegular\"> " + k['subtitle'] + " </p>" +
				"</div>" +
				"</div>" +
				"<a class=\"nav-link text-center mt-4 mx-5 _display_2 RubikRegular row no-gutters bg-btn border-radius-25 position-relative z-3 \" href=\"" + k['joblink'] + "\" target=\"_blank\"> <span class=\" text-white py-2 _display_8\">Apply</span> </a>" +
				"<a class=\"nav-link text-center mt-4 mx-5 _display_2 RubikRegular row no-gutters bg-btn border-radius-25 join-btn-hide position-relative z-3 \" href=\"login.html\"> <span class=\" text-white py-2 _display_8\">Join Us</span> </a>" +
				"</div>");
		});

		var mobileCircleWidth = $('#mobile_circle').outerWidth()+12;
		var desktopCircleWidth = $('#desktop_circle').outerWidth()+35;
		
		$(window).resize(function(){
		 	mobileCircleWidth = $('#mobile_circle').outerWidth()+12;
			desktopCircleWidth = $('#desktop_circle').outerWidth()+35;
		});


		$('#left-arrow').click(function (event) {
			event.preventDefault();
			$('#carousal').animate({
				scrollLeft: "-=" + desktopCircleWidth + "px"
			}, "slow");

		});

		$('#left-arrow').click(function (event) {
			event.preventDefault();
			$('#carousal_mobile').animate({
				scrollLeft: "-="+ mobileCircleWidth + "px"
			}, "slow");

		});

		$('body').on('click', '#right-arrow', function (event) {
			event.preventDefault();
			$('#carousal').animate({
				scrollLeft: "+=" + desktopCircleWidth + "px"
			}, "slow");
		});

		$('body').on('click', '#right-arrow', function (event) {
			event.preventDefault();
			$('#carousal_mobile').animate({
				scrollLeft: "+="+ mobileCircleWidth + "px"
			}, "slow");
		});

		
		$('#login-button').click(function (event) {
			event.preventDefault();
			$('#error-text').removeClass('d-none');

		});

		$('#login-button-mobile').click(function (event) {
			event.preventDefault();
			$('#error-text-mobile').removeClass('d-none');

		});


		//window height
		var windowHeight = $(window).height();
		var contentHeight = windowHeight - 425;
		//login screen height
		$('#login_content_height').css('min-height',windowHeight);

		//login content height
		$('#content_section_height').css('min-height',contentHeight);
	});



});
