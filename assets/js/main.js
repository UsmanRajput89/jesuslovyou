$( document ).ready(function() {
    console.log( "ready!" );

    $(".have_submenu").click(function () {
        console.log('Have Submenu Clicked');
        $("ul.submenu li").css("display", "block");
    });
});