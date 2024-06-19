jQuery(document).ready(function() {

    var $logo = $('#logo');

    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
    //show logo
    $('.menu .tabs a').click(function() {
        $logo.fadeIn('slow');
    });

    //hide logo
    $('.tab-profile').click(function() {
        $logo.fadeOut('slow');
    });


    $('#yellow-color').click(function(e) {
        $(".main-wrapper-resume").attr("id", "yellow");
    })

    $('#red-color').click(function(e) {
        $(".main-wrapper-resume").attr("id", "red");
    })

    $('#green-color').click(function(e) {
        $(".main-wrapper-resume").attr("id", "green");
    })

    $('#blue-color').click(function(e) {
        $(".main-wrapper-resume").attr("id", "blue");
    })

    $(".setting-icon").click(function() {
        $(".color-box").toggleClass("main");
    });











    //Needed variables
    var $content = $("#content");

    //run easytabs
    $content.easytabs({
        animate: true,
        updateHash: false,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 600,
        tabs: ".tmenu",
        tabActivateClass: 'active',
    });

    //hover menu effect
    $content.find('.tabs li a').hover(function() {
        $(this).stop().animate({ marginTop: "-7px" }, 200);
    }, function() {
        $(this).stop().animate({ marginTop: "0px" }, 300);
    });

});