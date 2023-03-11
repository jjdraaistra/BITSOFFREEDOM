$(document).ready(function () {

   $(".tabs_link").on("click", function () {
        $(".tabs_link, .tabs_content").removeClass("active");
        $(this).addClass("active");
        $(this).next(".tabs_content").addClass("active");
    });

   

    /* **** Add Remove Class **** */

    $(".toggle-swich").on("click", function () {
        $(".navbar-sidebar").toggleClass("show-sidebar");
        $("body").toggleClass("show-sidebar");
    });

    $(".close-sidebar").on("click", function () {
        $(".navbar-sidebar").removeClass("show-sidebar");
        $("body").removeClass("show-sidebar");
    });
    /* **** End Add Remove Class **** */
});
