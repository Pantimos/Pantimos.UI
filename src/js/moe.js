define(function(require, module, exports) {
    'use strict';
    var $ = window.$;
    var debug = require('./model/debug');
    debug(5);

    var home = require('./page/home');
    var project = require('./page/project');

    function initTheme() {
        $(function() {
            debug.log('this is demo.');
            home.init();
            project.init();
        });
    }

    return {
        init : initTheme
    };
});
