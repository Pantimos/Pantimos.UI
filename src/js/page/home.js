define(function(require, module, exports) {
    'use strict';

    var $ = window.$;
    var bgStar = require('../model/bg-star');
    bgStar('.js-page-home .bg-star');

    return {
        init : function() {
            return 'this is home.';
        }
    }
});
