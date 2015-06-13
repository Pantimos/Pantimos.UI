/* global define */
define(function(require) {
    'use strict';

    var tplPackage = {
        'project-list' : require('../tpl/project-list'),
        'mock-list' :require('../tpl/mock-list')
    };
    var container = {
        'project-list' : '.js-table-project-list',
        'mock-list' :'.js-table-mock-list'
    };

    function Template(page) {
        this.page = page;
    }

    Template.prototype = {
        render : function(name, data) {
            this.page.find(container[name]).replaceWith(tplPackage[name](data));
        }
    };

    return function(page) {
        if (page) {
            return new Template(page);
        } else {
            return this;
        }
    };
});
