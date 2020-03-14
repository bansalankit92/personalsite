
        var app = angular.module('app', ['ui.bootstrap']);
		app.directive('typed', ["$timeout", function ($timeout) {
			return {
				restrict: 'A',
				link: function (scope, element, attr) {
					element.typed({
						strings: [ " Tech Enthusiast", " Full Stack Dev", " Problem Solver"," Ankit Bansal"],
						typeSpeed: 1,
						// time before typing starts
						startDelay: 200,
						// backspacing speed
						backSpeed: 50,
						// time before backspacing
						backDelay: 1000,
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
		}])
		.controller('SiteController',function($scope,$timeout){
			$scope.getAge = Math.floor((new Date() - new Date("1993-12-27").getTime()) / 3.15576e+10)

			 var value = 60;
				var type;
			$scope.htmlProgressVal=0;
				$timeout(function(){
					$scope.htmlProgressVal = value;
					  }, 1500);
  

			$scope.type = getType(value);
						
			
		});
		
		function getType(value){
			if (value < 25) {
			  return 'Beginner';
			}  else if (value < 75) {
			  return 'Intermediate';
			} else {
			  return 'Expert';
			}
			
		}
		
		main();
		
		function main() {

			(function () {
					
						$(".navbar").hide();
					$('#backtotop').hide();
					 $('a.page-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					  var target = $(this.hash);
					  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					  if (target.length) {
						$('html,body').animate({
						  scrollTop: target.offset().top
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
						if ($(this).scrollTop() > 750) {
							$('.navbar').show();
						} else {
							$('.navbar').hide();
						}
						if(($('#abilities_section').offset().top)-100<($(this).scrollTop())){
							 $('.progress .progress-bar').progressbar({display_text: 'fill', use_percentage: false, amount_format: function() {return '';}});
						}
						
						if($(this).scrollTop()>800)
							$('#backtotop').show();
						else $('#backtotop').hide();
					});

					
					$('#backtotop').click(function(event) { 
						//event.preventDefault(); 
						$('html, body').animate({scrollTop: 0}, 3000);
 						return false;

					});
				  
				   $('body').scrollspy({ 
						target: '.navbar-default',
						offset: 80
					})
					
				  new WOW().init();
					//new SmoothScroll().init();
					 
			}());
		}		