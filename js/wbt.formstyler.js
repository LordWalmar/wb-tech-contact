/**
 * wbt.formstyler.js v1.0.2
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, WBTech
 * http://wbtech.pro/
 */
// TODO: separate basic styles and custom styles
// TODO: add tabindex and hotkeys
// TODO: input-file
// TODO: add custom templates
;(function($){
    var wbtFormStyler = {
        // Selects
        selectsRegisterEvents: function() {
            $("body")
                .on("click", ".wbt-input-select", function(e){
                    wbtFormStyler.cfg.stopPropagation = true;
                    e.preventDefault();
                    var $this = $(this);

                    if($this.hasClass("wbt-input-select__active")) {
                        $(".wbt-input-select").removeClass("wbt-input-select__active");
                    } else {
                        $(".wbt-input-select").removeClass("wbt-input-select__active");
                        $this.addClass("wbt-input-select__active");
                    }
                })
                .on("click", ".wbt-input-select_link", function(e){
                    wbtFormStyler.cfg.stopPropagation = true;
                    var $this = $(this),
                        $item = $this.closest(".wbt-input-select_item"),
                        $select = $this.closest(".wbt-input-select"),
                        $text = $select.find(".wbt-input-select_text");

                    $item.siblings().removeClass("wbt-input-select_item__active").end().addClass("wbt-input-select_item__active");
                    $select.find("option").prop("selected", false).eq($item.index()).prop("selected", true);
                    $text.text($this.text());
                    //$select.removeClass("wbt-input-select__active");
                    $select.find("select").trigger("change");//.focus();
                })
                .on("click", function(e){
                    if(!wbtFormStyler.cfg.stopPropagation) {
                        $(".wbt-input-select").removeClass("wbt-input-select__active");
                    }
                    wbtFormStyler.cfg.stopPropagation = false;
                })
                .on("change", ".wbt-input-select__styled", function(){
                    $this = $(this);
                    $option = $this.find("option:selected");
                    $this.siblings(".wbt-input-select_options").find(".wbt-input-select_item").removeClass("wbt-input-select_item__active").eq($option.index()).addClass("wbt-input-select_item__active");
                    $this.parent().find(".wbt-input-select_text").text($option.text());
                });
        },
        selectsStyle: function($el) {
            $.each($el, function(index, el){
                var $el = $(el),
                    $elSelected = $el.find("option[selected]"),
                    tempHTML = "",
                    defaultText = $elSelected.text();

                $el.wrap('<div class="wbt-input-select" tabindex="0" />').parent();//.addClass($el.data("class"));

                tempHTML = '<div class="wbt-input-select_options"><ul class="wbt-input-select_list">';
                $.each($el.find("option"), function(key, el) {
                    // Remove first option, use it as placeholder
                    if(key == 0 && $(el).attr("value") == "default") {
                        // If nothing selected
                        if(!$elSelected.length) {
                            defaultText = '<span class="wbt-input-select_default">' + $(el).text() + '</span>';
                        }
                        $(el).remove()
                    } else {
                        tempHTML += '<li class="wbt-input-select_item' + (key == $elSelected.index() ? " wbt-input-select_item__active" : "") + '"><div class="wbt-input-select_link">' + $(el).text() + '</div>';
                    }
                });
                tempHTML += '</ul></div>';

                tempHTML =
                    '<div class="wbt-input-select_selected">' +
                        '<span class="wbt-input-select_text">' + defaultText + '</span>' +
                        '<span class="wbt-input-select_button"></span>' +
                        '</div>' + tempHTML;

                $el.before(tempHTML);

                // Set select to blank state if no options selected
                if(!$elSelected.length) {
                    $el.prop("selectedIndex", -1);
                }

                $el.addClass("wbt-input__styled wbt-input-select__styled");
            });
        },

        // Checkboxes
        checkboxesRegisterEvents: function() {
            //var _active_class = "wbt-input-checkbox__active";
            $("body")
                .on("click", ".wbt-input-checkbox", function(e){
                    e.preventDefault();
                    $(this).find(".wbt-input-checkbox__styled").click();
                })
                .on("click", ".wbt-input-checkbox__styled", function(e){
                    e.stopPropagation();
                    $(this).closest(".wbt-input-checkbox").toggleClass("wbt-input-checkbox__active");
                    //var wbt_input = $(this).closest(".wbt-input-checkbox");
                    //$(this).closest('.my-manager').find('.wbt-input-checkbox')
                    //.not(wbt_input[0]).removeClass(_active_class).find('input[type=checkbox]').attr('checked', false)
                    //wbt_input.toggleClass(_active_class);
                    //wbt_input.find('input[type=checkbox]').attr('checked', wbt_input.hasClass(_active_class));
                });
        },
        checkboxesStyle: function($el) {
            $.each($el, function(index, el){
                var $el = $(el);
                $el
                    .wrap('<div class="wbt-input-checkbox' + ($el.prop("checked") ? ' wbt-input-checkbox__active' : '') + '" />')
                    .before('<span class="wbt-input-checkbox_icon" />')
                    .addClass("wbt-input__styled wbt-input-checkbox__styled");
            });
        },

        // Radios
        radiosRegisterEvents: function() {
            $("body")
                .on("click", ".wbt-input-radio", function(e){
                    e.preventDefault();
                    $(this).find(".wbt-input-radio__styled").click();
                })
                .on("click", ".wbt-input-radio__styled", function(e){
                    e.stopPropagation();
                    var $this = $(this);
                    $this
                        .prop("checked", true)
                        .closest(".wbt-input-radio").addClass("wbt-input-radio__active");

                    $(".wbt-input-radio__styled").filter("[name='" + $this.prop("name") + "']").not($this)
                        .prop("checked", false)
                        .closest(".wbt-input-radio").removeClass("wbt-input-radio__active");
                });
        },
        radiosStyle: function($el) {
            $.each($el, function(index, el){
                var $el = $(el);
                $el
                    .wrap('<div class="wbt-input-radio' + ($el.prop("checked") ? ' wbt-input-radio__active' : '') + '" />')
                    .before('<span class="wbt-input-radio_icon" />')
                    .addClass("wbt-input__styled wbt-input-radio__styled");
            });
        },


        defaults: {
            watchDOMChanges: true
        }
    };

    $.fn.wbtFormStyler = function(params){
        // Init plugin on first run
        if(!wbtFormStyler.cfg) {
            wbtFormStyler.cfg = {};
            $.extend(wbtFormStyler.cfg, wbtFormStyler.defaults, params);

            wbtFormStyler.ranges = {};

            if(wbtFormStyler.cfg.watchDOMChanges) {
                var query = this;
                $(document).on("wbtdomchange", function(){
                    $(query.selector).wbtFormStyler();
                });
            }
            // Register event handlers
            wbtFormStyler.selectsRegisterEvents();
            wbtFormStyler.checkboxesRegisterEvents();
            wbtFormStyler.radiosRegisterEvents();
        }

        // Style uninitialized inputs
        var filtered = this.filter(":not(.wbt-input__styled)");

        // Style them
        wbtFormStyler.selectsStyle(filtered.filter("select"));
        wbtFormStyler.checkboxesStyle(filtered.filter("input[type=checkbox]"));
        wbtFormStyler.radiosStyle(filtered.filter("input[type=radio]"));
        return this;

        $('#radio').click(function(){
           /* if((this+':checked').val == 'call'){
                $('.l-col-2 .input-select').show();
            }else{
                $('.l-col-2 .input-select').hide();

            }*/
            alert('Add');

        });
    };
})(jQuery);