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
            debug('log');

            var Template = require('../model/template')(page);
            var Network = require('../model/network');

            /**
             * 获取所有项目列表
             */
            function getList() {
                Network.request('getProjectList', '', '',
                    function(response) {
                        debug.info(response, '获取项目列表成功。');
                        Template.render('project-list', response);
                    }, function(response) {
                        debug.error(response, '获取项目列表失败');
                    });
            }

            /**
             * 页面载入时执行
             */
            function pageLoaded() {
                getList();
            }

            page.delegate('.js-remove-project', 'click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                Network.request('removeProject', '', {'domain' : $(this).closest('tr').find('td:first-child').text()},
                    function(response) {
                        getList();
                        debug.log(response, '创建新的项目环境成功。');
                    }, function(response) {
                        debug.error(response, '创建新的项目环境失败');
                    });
            });

            page.delegate('.js-create-project-button', 'click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                Network.request('createProject', '', {'domain' : page.find('.input-domain').val()},
                    function(response) {
                        getList();
                        debug.log(response, '创建新的项目环境成功。');
                    }, function(response) {
                        debug.error(response, '创建新的项目环境失败');
                    });
            });

            pageLoaded();
        }
    };
});
