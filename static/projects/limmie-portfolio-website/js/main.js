'use strict';
// changing color of ".header-bottom-slide"

$('.bottom').hover(function(){
	$(this).attr('src', 'img/bottom-hover.png');
	$(this).mouseout(function(){
		$(this).attr('src', 'img/bottom.png');
	});
});

// -------------------------------------------------------


// smooth transition from links to anchors
$(function(){
	$('a[href^="#"]').on('click', function(event) {
	  // отменяем стандартное действие
	  event.preventDefault();
	  
	  var sc = $(this).attr("href"),
		  dn = $(sc).offset().top;
	  /*
	  * sc - в переменную заносим информацию о том, к какому блоку надо перейти
	  * dn - определяем положение блока на странице
	  */
	  
	  $('html, body').animate({scrollTop: dn}, 1000);
	  
	  /*
	  * 1000 скорость перехода в миллисекундах
	  */
	});
  });

  //-----------------------------------------------------------------


// service-page function that changes color and image of '.service' block

$('.service-btn').hover(function() {
	$(this).parents('.service').css('background-color', '#00897b');
	$(this).parents('.service').css('color', '#fff');
});
$('.service-btn').mouseleave(function() {
	$(this).parents('.service').css('background-color', '#fff');
	$(this).parents('.service').css('color', '#3b3b3b');
});

$('#service-btn-1').hover(function() {
	$(this).siblings('.img').attr('src', 'img/service-1-white.png');
});
$('#service-btn-1').mouseleave(function() {
	$(this).siblings('.img').attr('src', 'img/service-1.png');
});

$('#service-btn-2').hover(function() {
	$(this).siblings('.img').attr('src', 'img/service-2-white.png');
});
$('#service-btn-2').mouseleave(function() {
	$(this).siblings('.img').attr('src', 'img/service-2.png');
});

$('#service-btn-3').hover(function() {
	$(this).siblings('.img').attr('src', 'img/service-3-white.png');
});
$('#service-btn-3').mouseleave(function() {
	$(this).siblings('.img').attr('src', 'img/service-3.png');
});

$('#service-btn-4').hover(function() {
	$(this).siblings('.img').attr('src', 'img/service-4-white.png');
});
$('#service-btn-4').mouseleave(function() {
	$(this).siblings('.img').attr('src', 'img/service-4.png');
});

$('#service-btn-5').hover(function() {
	$(this).siblings('.img').attr('src', 'img/service-5-white.png');
});
$('#service-btn-5').mouseleave(function() {
	$(this).siblings('.img').attr('src', 'img/service-5.png');
});

$('#service-btn-6').hover(function() {
	$(this).siblings('.img').attr('src', 'img/service-6-white.png');
});
$('#service-btn-6').mouseleave(function() {
	$(this).siblings('.img').attr('src', 'img/service-6.png');
});

//-------------------------------------------------------------------------------



//---------------------------------------------------------------------------


// adding css-shadow effect in price-block


$('.price-btn').mouseover(function(){
	$(this).parents('.price').addClass('effect');
	});
$('.price-btn').mouseleave(function(){
	$(this).parents('.price').removeClass('effect');
});

//------------------------------------------------------------------------------------------


// changing colors of link on hover

$('.facebook-link').hover(function() {
	$(this).children('.facebook').attr('src', 'img/facebook-original.png');
})
$('.facebook-link').mouseleave(function() {
	$(this).children('.facebook').attr('src', 'img/facebook.png');
});


$('.twitter-link').hover(function() {
	$(this).children('.twitter').attr('src', 'img/twitter-original.png');
})
$('.twitter-link').mouseleave(function() {
	$(this).children('.twitter').attr('src', 'img/twitter.png');
});


$('.messenger-link').hover(function() {
	$(this).children('.messenger').attr('src', 'img/messenger-original.png');
})
$('.messenger-link').mouseleave(function() {
	$(this).children('.messenger').attr('src', 'img/messenger.png');
});


$('.basket-link').hover(function() {
	$(this).children('.basket').attr('src', 'img/basket-original.png');
})
$('.basket-link').mouseleave(function() {
	$(this).children('.basket').attr('src', 'img/basket.png');
});


// ----------------------------------------------------

// hamburger navigation

$('.above-header-burger').click(function(event) {
	$('.above-header-burger, .above-header-nav').toggleClass('active');
	$('body').toggleClass('lock');
});

// -----------------------------------------------

// portofolio animation hiding and showing works

$(".all_btn").click(function() {
	$(this).addClass("active")
	$(".web_design_btn").removeClass("active")
	$(".ui_design_btn").removeClass("active")
	$(".mockup_btn").removeClass("active")
	$(".web_design_block").fadeIn("slow")
})

$(".web_design_btn").click(function() {
	$(".web_design_block").fadeIn("slow")
	$(this).addClass("active")
	$(".all_btn").removeClass("active")
	$(".ui_design_btn").removeClass("active")
	$(".mockup_btn").removeClass("active")
})

$(".ui_design_btn").click(function() {
	$(this).addClass("active")
	$(".all_btn").removeClass("active")
	$(".web_design_btn").removeClass("active")
	$(".mockup_btn").removeClass("active")
	$(".web_design_block").fadeOut("slow")
})

$(".mockup_btn").click(function() {
	$(this).addClass("active")
	$(".all_btn").removeClass("active")
	$(".web_design_btn").removeClass("active")
	$(".ui_design_btn").removeClass("active")
	$(".web_design_block").fadeOut("slow")
})


// ------------------------------------------------------

// team animation with owl-carousel

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsive:{
			0:{
				items:1
			},
			510:{
				items:1
			},
			690:{
				items:1
			},
			930:{
				items:2
			},
			1300:{
				items:3
			}
		}
	})
});


// ------------------------------------------------

// navigation animation with scroll

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  return false;
});


//-------------------------------------------------------------