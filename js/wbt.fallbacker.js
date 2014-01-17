/**
 * wbt.fallbacker.js v1.0.0
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, WBTech
 * http://wbtech.pro/
 */
function wbtFallbacker() {
    window.wbtFallbacker = {};
    window.wbtFallbacker.SVG = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
    window.wbtFallbacker.Touch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

    if(window.wbtFallbacker.SVG) {
       document.documentElement.className += " svg";
    }
    if(window.wbtFallbacker.Touch) {
       document.documentElement.className += " touch";
    }

    if(!window.wbtFallbacker.SVG) {
        // Fallback for CSS background-images
        var sheets = document.styleSheets;
        if(sheets) {
            for(var i = 0; i < sheets.length; i++) {
                var rules = (sheets[i].cssRules) ? sheets[i].cssRules : sheets[i].rules;
                if(rules) {
                    for(var j = 0; j < rules.length; j++) {
                        var rule = rules[j].style;
                        if(rule && rule.backgroundImage) {
                            rule.backgroundImage = rule.backgroundImage.replace(".svg", "");
                        }
                    }
                }
            }
        }

        // Fallback for <img> tags
        var imgs = document.getElementsByTagName("img");
        for(var i = 0; i < imgs.length; i++) {
            imgs[i].src = imgs[i].src.replace(".svg", "");
//            console.log(imgs[i].src);
        }
    }
}