/*
	Project Name : Alcazar
	## UDF Function 
	
	
	## Document Ready
		-- Scrolling Navigation
		-- Responsive Caret
		-- Remove p empty tag for Shortcode
		-- Tooltip
		
		-- Quick Contact Form
	## Window Load
		- Site Loader
*/
(function($)
{
	"use strict" 
		
	/* ## Document Scroll - Window Scroll */
	$( document ).scroll(function()
	{
		var scroll	= $(window).scrollTop();
		var height	=	$(window).height();
		/*** set sticky menu ***/
		if( scroll >= height )
		{
			$(".header-section").addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".header-section").removeClass("navbar-fixed-top animated fadeInDown");
		}
		else
		{
			$(".header-section").removeClass("navbar-fixed-top animated fadeInDown");
		} /* set sticky menu - end */
		if ($(this).scrollTop() >= 50)
		{
			/* If page is scrolled more than 50px */
			$('#back-to-top').fadeIn(200);    /* Fade in the arrow */
		}
		else
		{
			$('#back-to-top').fadeOut(200);   /* Else fade out the arrow */
		}
	});
	$('#back-to-top').on("click", function()
	{
		/* When arrow is clicked */
		$('body,html').animate(
		{
			scrollTop : 0 /* Scroll to top of body */
		},800);
	});		
		
	
	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {
		/* -- Scrolling Navigation */
		var scroll	=	$(window).scrollTop();
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/* ** set sticky menu ** */
		if( scroll >= height -500 )
		{
			$(".header-section").addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".header-section").removeClass("navbar-fixed-top");
		}
		else
		{
			$(".header-section").removeClass("navbar-fixed-top");
		} /* set sticky menu - end */
		
		/* local url of page (minus any hash, but including any potential query string) */
		var url = location.href.replace(/#.*/,'');
		
		/* Find all anchors */
		$("#navbar").find("a[href]").each(function(i,a) {
			var $a = $(a);
			var href = $a.attr("href");
			/* check is anchor href starts with page's URI */
			if ( href.indexOf(url+"#") == 0 ) {
				/* remove URI from href */
				href = href.replace(url,"");
				/* update anchors HREF with new one */
				$a.attr("href",href);
			}
		});
		/* Add Easing Effect on Section Scroll */
		$(".navbar-nav > li a[href*=#]:not([href=#]), .site-logo a[href*=#]:not([href=#])").on("click", function() {
			if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$("html, body").animate( { scrollTop: target.offset().top - 89 }, 1000, 'easeInOutExpo' );
					return false;
				}
			}
		});
		/* -- Responsive Caret */
		$(".ddl-switch").on("click", function() {
			var li = $(this).parent();
			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		
		/* -- Expand Panel */
		$("#slideit").on ("click", function() {
			$("#slidepanel").slideDown(1000);
			$("html").animate({ scrollTop: 0 }, 1000);
		});

		/* Collapse Panel */
		$("#closeit").on ("click", function() {
			$("#slidepanel").slideUp("slow");	
			$("html").animate({ scrollTop: 0 }, 1000);
		});	
		
		/* Switch buttons from "Log In | Register" to "Close Panel" on click */
		$("#toggle a").on("click", function () {
			$("#toggle a").toggle();
		});
				
		/* -- Services Section */
		if( $(".services-section").length ) {					
			$(".services-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".services-section .col-md-4").addClass( "animated bounceIn");
				});
			});
		}
		
		/* -- Services Section */
		if( $(".services-section2").length ) {					
			$(".services-section2").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".services-section2").addClass( "animated rubberBand");
				});
			});
		}
		
		/* -- Portfolio Section */
		setTimeout(function() {
			var $container = $(".portfolio-list");
			$container.isotope({
			  itemSelector: ".portfolio-box",
			  transitionDuration: "0.5s"
			});
			$("#filters a").on("click",function(){
				$("#filters a").removeClass("active");
				$(this).addClass("active");
				var selector = $(this).attr("data-filter");
				$container.isotope({ filter: selector });		
				return false;
			});
		},5000);
		
		$('.portfolio-box').magnificPopup({
			delegate: 'a.zoom',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',				
			}
		});
		
		if( $(".portfolio-section").length ) {					
			$(".portfolio-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".portfolio-section .portfolio-list").addClass( "animated rubberBand");
				});
			});
		}
		
		
		/* -- Why Choose Section */		
		if( $(".why-choose-section").length ) {					
			$(".why-choose-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".why-choose-section .container").addClass( "animated fadeInDown");
					$(".why-choose-section .why-choose-bg-img").addClass( "animated fadeInUp");
				});
			});
		}
		
		/* -- Why Choose Section */		
		if( $(".why-choose-section2").length ) {					
			$(".why-choose-section2").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".why-choose-section2 .container").addClass( "animated fadeInDown");
					$(".why-choose-section2 .why-choose-bg-img").addClass( "animated fadeInUp");
				});
			});
		}
		
		/* -- Team Section */		
		if( $(".team-section").length ) {					
			$(".team-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".team-section .team-box").addClass( "animated flipInY");
				});
			});
		}
		
		/* -- Latest News Section */		
		if( $(".latest-news-section").length ) {					
			$(".latest-news-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".latest-news-section .container .col-md-6").addClass( "animated fadeInLeft");
				});
			});
		}
		
		/* -- Client Section */
		if( $(".client-section").length ) {
			$(".client-carousel").owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				margin: 0,
				smartSpeed: 200,				
				autoplay: true,
				responsive:{
					0:{
						items: 2
					},
					480:{
						items: 3
					},
					640:{
						items: 3
					},
					992:{
						items: 6
					}
				}
			})
		}
		
		/* -- Testimonial Section */
		if( $(".testimonial-section").length ) {
			$(".testimonial-carousel").owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				margin: 30,
				smartSpeed: 200,				
				autoplay: true,
				responsive:{
					0:{
						items: 1
					},
					640:{
						items: 2
					}
				}
			})
		}
		
		if( $(".testimonial-section2").length ) {
			$(".testimonial-carousel2").owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				margin: 30,
				smartSpeed: 200,				
				autoplay: false,
				responsive:{
					0:{
						items: 1
					},
					767:{
						items: 2
					}
				}
			})
		}
		
		/* -- Statistics Section */
		$('.counter-section').each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{		
				var statistics_item_count = 0;
				var statistics_count = 0;					
				statistics_item_count = $( "[id*='statistics_count-']" ).length;

				for(var i=1; i<=statistics_item_count; i++)
				{
					statistics_count = $( "[id*='statistics_count-"+i+"']" ).attr( "data-statistics_percent" );
					$("[id*='statistics_count-"+i+"']").animateNumber({ number: statistics_count }, 2000);
				}
				$('.statistics-section .col-md-3').addClass('animated fadeInDown');
			});
		});
		
		
		/* -- Quick Contact Form */
		// $( "#btn_submit" ).on( "click", function(event) {
		// 	event.preventDefault();
		// 	var mydata = $("form").serialize();
		// 	$.ajax({
		// 		type: "POST",
		// 		dataType: "json",
		// 		url: "contact.php",
		// 		data: mydata,
		// 		success: function(data) {
		// 			if( data["type"] == "error" ){
		// 				$("#alert-msg").html(data["msg"]);
		// 				$("#alert-msg").removeClass("alert-msg-success");
		// 				$("#alert-msg").addClass("alert-msg-failure");
		// 				$("#alert-msg").show();
		// 			} else {
		// 				$("#alert-msg").html(data["msg"]);
		// 				$("#alert-msg").addClass("alert-msg-success");
		// 				$("#alert-msg").removeClass("alert-msg-failure");					
		// 				$("#input_name").val("");
		// 				$("#input_email").val("");
		// 				$("#input_phone").val("");
		// 				$("#input_subject").val("");
		// 				$("#textarea_message").val("");
		// 				$("#alert-msg").show();
		// 			}
		// 		},
		// 		error: function(xhr, textStatus, errorThrown) {
		// 			//alert(textStatus);
		// 		}
		// 	});
		// 	return false;
		// });/* Quick Contact Form /- */
		$(document).ready(function () {
			$("#btn_submit").on("click", function (event) {
				event.preventDefault();
				var mydata = $("form").serializeArray();
		
				$.ajax({
					type: "POST",
					dataType: "json",
					url: "contact.php",
					data: mydata,
					success: function (data) {
						if (data["type"] == "error") {
							$("#alert-msg").html(data["msg"]);
							$("#alert-msg").removeClass("alert-msg-success");
							$("#alert-msg").addClass("alert-msg-failure");
							$("#alert-msg").show();
						} else {
							$("#alert-msg").html(data["msg"]);
							$("#alert-msg").addClass("alert-msg-success");
							$("#alert-msg").removeClass("alert-msg-failure");
							$("#input_name").val("");
							$("#input_email").val("");
							$("#input_phone").val("");
							$("#input_subject").val("");
							$("#textarea_message").val("");
							$("#alert-msg").show();
						}
					},
					error: function (xhr, textStatus, errorThrown) {
						// Handle the error (you can uncomment the alert for debugging)
						// alert(textStatus);
					},
				});
		
				return false;
			});
		});
		
	});/* document.ready /- */
	
	/* ## Window Resize */
	$( window ).resize(function() {
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		if ( width > 991 ) {
			$("#slidepanel").removeAttr("style");
		} else {
			// do nothing
		}
		
	});
	
	/* ## Window Load - Handler for .load() called */
	$(window).load(function() {
		/* - Site Loader */
		if ( !$("html").is(" .ie6, .ie7, .ie8 ") ) {
			$("#site-loader").delay(100).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
	});
	
})(jQuery);