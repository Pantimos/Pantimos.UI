/**
 * 首页脚本
 */
define(function(require, module, exports) {
    'use strict';

    var $ = window.$;
    var bgStar = require('../model/bg-star');
    var homePage = $('.js-page-home');

    function init() {
        if (homePage.length) {
            bgStar('.js-page-home .bg-star');
            homePage.find('.application-intro').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                var scrollTop = homePage.find('.bg-star').height() + homePage.find('.bg-star').offset().top - $('body > navbar').height();
                $('html,body').animate({scrollTop : scrollTop}, 800);
            });
        }
    }

    return {
        init : init
    };
});
