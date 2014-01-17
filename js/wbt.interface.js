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

     $('.l-col-2 :radio').click(function(){
            var a = $(this).val();
            if(a == 'call'){
                $('#selectShow').show(1500);
            }else
                $('#selectShow').hide(1500);
        });

    // Detect mobile
    (jQuery.browser = jQuery.browser || {}).touch = "ontouchstart" in document.documentElement;
    if(!jQuery.browser.touch) {
        $("a.tel").attr("href", "#").on("click", function(e){
            e.preventDefault();
        });
    }
});