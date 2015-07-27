/**
 * 页面入口脚本
 *
 * @author soulteary
 * @date 2015.07.28
 */
/* global define, window, location */
define(function(require) {
    'use strict';

    if (!('$CONFIG' in window)) {
        throw '页面数据不存在。';
    }

    var Data = {'data' : {'nav' : []}};
    // clone一份干净的数据，隔离页面打底数据

    var $ = require('./core');
    $.extend(true, Data, window.$CONFIG);

    var isDev = location.hostname === 'localhost';

    function fixsDevLink(src, append) {
        if (src.hasOwnProperty('link')) {
            src.link = src.link + append;
        }
    }

    if (isDev) {
        for (var i = 0, j = Data.data.nav.length; i < j; i++) {
            fixsDevLink(Data.data.nav[i], '.html');
            if (Data.data.nav[i].hasOwnProperty('children')) {
                for (var m = 0, n = Data.data.nav[i].children.length; m < n; m++) {
                    fixsDevLink(Data.data.nav[i].children[m], '.html');
                }
            }
        }
        console.log(Data.data.nav)
    }

    return Data;
});
