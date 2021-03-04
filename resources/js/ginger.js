window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled > 2){
        $("header").addClass('back-scroll');

    }
    if(2 > scrolled){
        $("header").removeClass('back-scroll');

    }
};

$('.menu-button').click(function () {
    $(".mob-nav").show();
    $(".menu-button").hide();
    $(".menu-cross").show();
    $("body").toggleClass("hidden");
});
$('.menu-cross, .mob-nav a').click(function () {
    $(".mob-nav").hide();
    $(".menu-button").show();
    $(".menu-cross").hide();
    $("body").toggleClass("hidden");
});


$('.nav a').click(function () {
    let scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top - 70
        }, 500);
    }
});
