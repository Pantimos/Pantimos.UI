/**
 * 项目页面
 */
define(function(require, module, exports) {
    'use strict';

    var $ = window.$;
    var projectPage = $('.js-page-project');

    function init() {
        if (projectPage.length) {
            projectPage.find('.js-create-project-button').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log(1);
            });
        }
    }

    return {
        init : init
    };
});
