
        var app = angular.module('app', []);
		app.directive('typed', ["$timeout", function ($timeout) {
			return {
				restrict: 'A',
				link: function (scope, element, attr) {
					element.typed({
						strings: [ " Full Stack Developer", " Tech Enthusiast"," Geek"," Ankit Bansal"],
						typeSpeed: 0.7,
						// time before typing starts
						startDelay: 0,
						// backspacing speed
						backSpeed: 0,
						// time before backspacing
						backDelay: 500,
						// loop
						loop: false,
						// false = infinite
						loopCount: false,
						// show cursor
						showCursor: true,
						// character for cursor
						cursorChar: "|",
						// attribute to type (null == text)
						attr: null,
						// either html or text
						contentType: 'html',
						// call when done callback function
						callback: function() {},
						// starting callback function before each string
						preStringTyped: function() {},
						//callback for every typed string
						onStringTyped: function() { },
						// callback for reset
						resetCallback: function() {}
					});
				}
			}
		}]);
		
		main();
		
		function main() {

			(function () {
					
						$(".navbar").hide();
					
					 $('a.page-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					  var target = $(this.hash);
					  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					  if (target.length) {
						$('html,body').animate({
						  scrollTop: target.offset().top - 40
						}, 900);
						return false;
					  }
					}
				  });
				   $(window).bind('scroll', function() {
						var navHeight = $(window).height() - 500;
						if ($(window).scrollTop() > navHeight) {
							$('.navbar-default').addClass('on');
						} else {
							$('.navbar-default').removeClass('on');
						}
						if ($(this).scrollTop() > 600) {
							$('.navbar').fadeIn();
						} else {
							$('.navbar').fadeOut();
						}
					});

				  
				   $('body').scrollspy({ 
						target: '.navbar-default',
						offset: 80
					})
					
				  new WOW().init();
					//new SmoothScroll().init();
					 
			}());
		}		