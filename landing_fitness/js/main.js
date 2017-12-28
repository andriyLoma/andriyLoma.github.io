$(document).ready(function () {
    $(".header a:eq(0)").click(function () {
            $('html').animate({ scrollTop: $('.page').offset().top }, 1100);
    });
    $(".header a:eq(1)").click(function () {
            $('html').animate({ scrollTop: $('.features').offset().top - 150+'px' }, 1100);
    });
    $(".header a:eq(2)").click(function () {
            $('html').animate({ scrollTop: $('.our_team').offset().top - 150+'px' }, 1100);
    });
    $(".header a:eq(3)").click(function () {
            $('html').animate({ scrollTop: $('.gallery').offset().top - 200+'px' }, 1100);
    });
    $(".header a:eq(4)").click(function () {
            $('html').animate({ scrollTop: $('.pricing').offset().top - 150+'px' }, 1100);
    });
    $(".header a:eq(5)").click(function () {
            $('html').animate({ scrollTop: $('.contact_us').offset().top  }, 1100);
    });
    $("#scroll_top_button").click(function () {
            $('html').animate({ scrollTop: $('.page').offset().top }, 1100);
    });
});