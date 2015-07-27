/**
 * 页面入口脚本
 *
 * @author soulteary
 * @date 2015.07.28
 */
/* global define */
define(function(require) {
    'use strict';

    return {
        init : function() {
            var $ = require('./core');
            var template = require('./template');
            var headerNavTpl = template($('body'));
            var pageData = require('./data');

            headerNavTpl.render('header-nav', pageData.data.nav);
        }
    };
});
