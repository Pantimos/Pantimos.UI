/**
 * 项目页面
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

            var debug = require('../model/debug');
            debug('info');

            var Template = require('../model/template')(page);
            var Network = require('../model/network');

            /**
             * 获取所有项目列表
             */
            function getList() {
                Network.request('getProjectList', '', '', function(response) {
                    Template.render('project-list', response);
                }, function(response) {
                    debug.error(response, '失败');
                });
            }

            /**
             * 页面载入时执行
             */
            function pageLoaded() {
                getList();
            }

            page.find('.js-create-project-button').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $.post('/create-project', {'domain' : page.find('.input-domain').val()}, function(resp) {
                    debug.error(resp);
                });
            });
            pageLoaded();
        }
    };
});
