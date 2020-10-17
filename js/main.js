$(function() {
    // calculate body padding top depend on navpar height
    $("body").css("paddingTop", $("nav").innerHeight());

    // nav slide
    $("nav i").click(function() {
        $("nav ul").slideToggle();
    })

    // navbar function
    $("nav li a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top - 100
        }, 1000);
    });

    // add activ class on navbar link
    $("nav ul li a").click(function() {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });

    // scrolling top
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {

            $(".scroll-top").fadeIn()
        } else {
            $(".scroll-top").fadeOut()
        }
    })

    $(".scroll-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("nav").css("background-color", "rgba(119, 76, 251, .8)");
        } else {
            $("nav").css("background-color", "rgba(119, 76, 251,1)");
        };
    })
})