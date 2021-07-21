// changing links on hover on contacts page

$('.pinterest').hover(function() {
	$(this).attr('src', 'img/pinterest-black.png');
});
$('.pinterest').mouseleave(function() {
	$(this).attr('src', 'img/pinterest.png');
});

$('.facebook').hover(function() {
	$(this).attr('src', 'img/facebook-black.png');
});
$('.facebook').mouseleave(function() {
	$(this).attr('src', 'img/facebook.png');
});

$('.twitter').hover(function() {
	$(this).attr('src', 'img/twitter-black.png');
});
$('.twitter').mouseleave(function() {
	$(this).attr('src', 'img/twitter.png');
});

//---------------------------------------------------

// changing links on hover on footer page

$('.pinterest-black').hover(function() {
	$(this).attr('src', 'img/pinterest.png');
});
$('.pinterest-black').mouseleave(function() {
	$(this).attr('src', 'img/pinterest-black.png');
});

$('.facebook-black').hover(function() {
	$(this).attr('src', 'img/facebook.png');
});
$('.facebook-black').mouseleave(function() {
	$(this).attr('src', 'img/facebook-black.png');
});

$('.twitter-black').hover(function() {
	$(this).attr('src', 'img/twitter.png');
});
$('.twitter-black').mouseleave(function() {
	$(this).attr('src', 'img/twitter-black.png');
});

$('.google').hover(function() {
	$(this).attr('src', 'img/google.png');
});
$('.google').mouseleave(function() {
	$(this).attr('src', 'img/google-black.png');
});

//----------------------------------------------------------------


$('.nav__btn').on('click', function () { 
	$('.menu').toggle('slow');
	$(this).toggleClass('change');
});