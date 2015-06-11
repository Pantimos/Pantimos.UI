/**
 * 首页脚本
 *
 * @author soulteary
 * @date 2015.06.12
 */
/* global define */
define(function(require) {
    'use strict';

    return {
        init : function(container) {

            var $ = require('../model/core');
            var page = $(container);

            if (!page.length) {
                return false;
            }

            var bgStar = require('../model/bg-star');

            bgStar('.js-page-home .bg-star');
            $('.application-intro').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                var scrollTop = page.find('.bg-star').height() + page.find('.bg-star').offset().top - $('body > navbar').height();
                if (scrollTop > $('body').scrollTop()) {
                    $('html,body').stop().animate({scrollTop : scrollTop}, 800);
                }
            });
        }
    };
});
