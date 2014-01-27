$(function(){
    wbtFallbacker();

    $("pre code").each(function(i, block) {hljs.highlightBlock(block)});

    $(".header-nav-icon").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
    });


    $(".request-switch_item").on("click", function(e) {
        e.preventDefault();
        $(".request-switch").toggleClass("request-switch__active");
        $(".request-content").toggleClass("request-content__active");
        if($(".request-content").hasClass("request-content__active")) {
            $(".request-details").slideDown();
        } else {
            $(".request-details").slideUp();
        }
    });

    $(".input-checkbox, .input-radio, .input-select").wbtFormStyler();

  /*  $('.request-content').find('.input-radio').on("click",function(){
//var $select = $('.request-content').find('.wbt-input-select').eq(1);
       var $select = $('selectinput-select[preferred_time]');
        $select.toggleClass("request-contact-by__phone");
        if($select.hasClass("request-contact-by__phone")){
                $select.addClass('request-contact-by__phone');
            }else{
                 $select.removeClass('request-contact-by__phone');
            }
        }); */


     $container = $(".preferred-answer");
        $container.find($(".input-radio")).on("click", function(){
            $container.find($('.wbt-input-select')).toggleClass("preferred-answer__email");
        });

            // Detect mobile
    (jQuery.browser = jQuery.browser || {}).touch = "ontouchstart" in document.documentElement;
    if(!jQuery.browser.touch) {
        $("a.tel").attr("href", "#").on("click", function(e){
            e.preventDefault();
        });
    }
});