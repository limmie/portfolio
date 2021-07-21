// hamburger
$('.hamburger').click(function() {
	$('.header__nav').toggleClass("show")
})


// toggling text function extending
$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});


// filters changing color on click
$('.filter__1').click(function() {
	$(this).toggleClass('filter__1')
})

$('.filters__map').click(function() {
	$('#show__hide').toggleText('Hide Map', 'Show Map')
	$(this).toggleClass('off on__green')
})

$('.filter__home').click(function() {
	$(this).toggleClass('off on__green')
})

$('.filter__people').click(function() {
	$(this).toggleClass('off on__red')
})

$('.filter__education').click(function() {
	$(this).toggleClass('off on__blue')
})

$('.filter__music').click(function() {
	$(this).toggleClass('off on__orange')
})

$('.filter__transport').click(function() {
	$(this).toggleClass('off on__purple')
})

// show more toggling class
$(".services__item").hover(function() {
	$(this).find('.item__show').toggleClass("show")
})


// sliding offers
$(".offers__home").click(function() {
	$(".offers__heading").css("color", "#1baf5d")
	$(".offers__heading").toggleText("Home", "Home")
	$(".description__1").find("img").attr("src", "img/offer-description-1.png")
	$(".description__2").find("img").attr("src", "img/offer-description-2.png")
})

$(".offers__people").click(function() {
	$(this).find('img').attr("src", "img/people-offer-on.png")
	$(this).css("border-color", "#e94e38")
	$(".line-1").css("background", "linear-gradient(90deg, #1baf5d, #e94e38)")
	$(".offers__heading").css("color", "#e94e38")
	$(".offers__heading").toggleText("Home", "People")
	$(".description__1").find("img").attr("src", "img/offer-description-3.png")
	$(".description__2").find("img").attr("src", "img/offer-description-4.png")
})

$(".offers__education").click(function() {
	$(this).find('img').attr("src", "img/education-offer-on.png")
	$(this).css("border-color", "#3cb8f1")
	$(".line-2").css("background", "linear-gradient(90deg, #e94e38, #3cb8f1)")
	$(".offers__heading").toggleText("People", "Education")
	$(".offers__heading").css("color", "#3cb8f1")
	$(".description__1").find("img").attr("src", "img/offer-description-5.png")
	$(".description__2").find("img").attr("src", "img/offer-description-6.png")
})

$(".offers__music").click(function() {
	$(this).find('img').attr("src", "img/music-offer-on.png")
	$(this).css("border-color", "#f19e1f")
	$(".line-3").css("background", "linear-gradient(90deg, #3cb8f1, #f19e1f)")
	$(".offers__heading").toggleText("Education", "Music")
	$(".offers__heading").css("color", "#f19e1f")
	$(".description__1").find("img").attr("src", "img/offer-description-7.png")
	$(".description__2").find("img").attr("src", "img/offer-description-8.png")
})

$(".offers__transport").click(function() {
	$(this).find('img').attr("src", "img/transport-offer-on.png")
	$(this).css("border-color", "#88499c")
	$(".line-4").css("background", "linear-gradient(90deg, #f19e1f, #88499c)")
	$(".offers__heading").toggleText("Music", "Transport")
	$(".offers__heading").css("color", "#88499c")
	$(".description__1").find("img").attr("src", "img/offer-description-9.png")
	$(".description__2").find("img").attr("src", "img/offer-description-10.png")
})

// changing colors of links

$('.fb').hover(function() {
	$(this).attr("src", "img/facebook-dark.png")
})
$('.fb').mouseout(function() {
	$(this).attr("src", "img/facebook.png")
})

$('.tw').hover(function() {
	$(this).attr("src", "img/twitter-dark.png")
})
$('.tw').mouseout(function() {
	$(this).attr("src", "img/twitter.png")
})

$('.gl').hover(function() {
	$(this).attr("src", "img/google-dark.png")
})
$('.gl').mouseout(function() {
	$(this).attr("src", "img/google.png")
})

$('.yt').hover(function() {
	$(this).attr("src", "img/youtube-dark.png")
})
$('.yt').mouseout(function() {
	$(this).attr("src", "img/youtube.png")
})