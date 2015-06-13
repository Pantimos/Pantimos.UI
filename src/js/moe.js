/**
 * 页面入口脚本
 *
 * @author soulteary
 * @date 2015.06.12
 */
/* global define */
define(function(require) {
    'use strict';

    var $ = require('./model/core');
    var debug = require('./model/debug');
    debug('info');

    var page = {};

    function init() {
        $(function() {
            debug.log('Pantimos Start!');
            page.home = require('./page/home').init('.js-page-home');
            page.project = require('./page/project').init('.js-page-project');
            page.mock = require('./page/mock').init('.js-page-mock');
        });
    }

    return {
        init : init
    };
});
