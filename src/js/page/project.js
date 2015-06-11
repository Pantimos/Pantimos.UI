/**
 * 项目页面
 */
define(function (require, module, exports) {
    'use strict';

    var $ = window.$;
    var projectPage = $('.js-page-project');

    /**
     * 获取所有项目列表
     */
    function getList() {
        if (projectPage.length) {
            $.post('/project-list', null, function (response) {
                if (response) {
                    switch (response.code) {
                        case 200:
                            console.log(response.data);
                            break;
                        case 400:
                            console.log(response.data);
                            break;
                    }
                }
            });
        }
    }


    function pageLoaded() {
        getList();
    }


    function init() {
        if (projectPage.length) {
            projectPage.find('.js-create-project-button').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $.post('/create-project', {'domain' : projectPage.find('.input-domain').val()}, function (resp) {
                    console.log(resp);
                });
            });
        }
        pageLoaded();
    }

    return {
        init : init
    };
});
