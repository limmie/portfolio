// projects-page animation

$('.non-active').click(function() {
	$('.active').addClass('non-active');
	$('.active').removeClass('active');
	$(this).removeClass('non-active');
	$(this).addClass('active');
});

$('.btn-1').click(function() {
	$('.underline').css('display', 'block');
	$('.underline').css('left', '50px');
	$('.underline').css('width', '30px');
	$('.project').fadeIn('slow');
})

$('.btn-2').click(function() {
	$('.underline').css('display', 'block');
	$('.underline').css('left', '115px');
	$('.underline').css('width', '20px');
	$('.game-project').fadeIn('slow');
	$('.app-project').fadeOut('slow');
	$('.content-project').fadeOut('slow');
	$('.projects-page__projects').css('grid-template', 'repeat(1, 270px)/repeat(4, 300px)');
})

$('.btn-3').click(function() {
	$('.underline').css('display', 'block');
	$('.underline').css('left', '170px');
	$('.underline').css('width', '40px');
	$('.game-project').fadeOut('slow');
	$('.app-project').fadeIn('slow');
	$('.content-project').fadeOut('slow');
})

$('.btn-4').click(function() {
	$('.underline').css('display', 'block');
	$('.underline').css('left', '260px');
	$('.underline').css('width', '70px');
	$('.game-project').fadeOut('slow');
	$('.app-project').fadeOut('slow');
	$('.content-project').fadeIn('slow');
})

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