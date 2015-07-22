/**
 * 页面入口脚本
 *
 * @author soulteary
 * @date 2015.07.23
 */
/* global define */
define(function(require) {
    'use strict';

    var $ = require('./core');
    var template = require('./template');
    var headerNavTpl = template($('body'));

    var data = [
        {
            'class' : 'application-intro',
            'icon'  : 'fa fa-lightbulb-o',
            'link'  : '#intro',
            'name'  : '功能概览'
        },
        {
            'icon' : 'fa fa-book',
            'link' : '/how-to-use',
            'name' : '使用方法'
        },
        {
            'children' : [
                {
                    'icon' : 'fa fa-connectdevelop',
                    'link' : '/project',
                    'name' : '创建环境'
                },
                {
                    'divider' : true
                },
                {
                    'header' : '模拟数据'
                },
                {
                    'icon' : 'fa fa-medium',
                    'link' : '/mock',
                    'name' : '接口模拟'
                },
                {
                    'icon' : 'fa fa-picture-o',
                    'link' : '/mockImage',
                    'name' : '图片模拟'
                },
                {
                    'divider' : true
                },
                {
                    'icon' : 'fa fa-skyatlas',
                    'link' : '/upload',
                    'name' : '上传文件'
                }
            ],
            'icon'     : 'fa fa-list',
            'name'     : '功能列表'
        },
        {
            'children' : [
                {
                    'header' : '前端代理'
                },
                {
                    'icon' : 'fa fa-angle-right',
                    'link' : '/nginx',
                    'name' : 'Nginx'
                },
                {
                    'divider' : true
                },
                {
                    'header' : '数据管理'
                },
                {
                    'icon' : 'fa fa-angle-right',
                    'link' : '/redis',
                    'name' : 'Redis'
                },
                {
                    'icon' : 'fa fa-angle-right',
                    'link' : '/mysql',
                    'name' : 'MySQL'
                },
                {
                    'icon' : 'fa fa-angle-right',
                    'link' : '/mongo',
                    'name' : 'Mongo'
                },
                {
                    'divider' : true
                },
                {
                    'header' : '运行时管理'
                },
                {
                    'icon' : 'fa fa-angle-right',
                    'link' : '/hhvm',
                    'name' : 'HHVM'
                },
                {
                    'icon' : 'fa fa-angle-right',
                    'link' : '/nodejs',
                    'name' : 'Nodejs'
                },
                {
                    'divider' : true
                },
                {
                    'icon' : 'fa fa-tachometer',
                    'link' : '/health',
                    'name' : '组件状态'
                }
            ],
            'icon'     : 'fa fa-list',
            'name'     : '组件列表'
        },
        {
            'children' : [
                {
                    'header' : '在线资源'
                },
                {
                    'blank' : true,
                    'icon'  : 'fa fa-github',
                    'link'  : 'https://github.com/Pantimos/Pantimos',
                    'name'  : 'GitHub'
                }
            ],
            'icon'     : 'fa fa-question',
            'name'     : '关于程序'
        }
    ];

    return {
        init : function() {
            headerNavTpl.render('header-nav', data);
        }
    };
});
