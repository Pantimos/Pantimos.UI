/* global define, location */
define(function (require) {
    'use strict';

    var $ = require('./core');
    var host = '//' + location.host;
    var protocol = location.protocol;


    function makeUp(name, params) {
        var base = API[name], param = '';
        if (!base) {
            return '';
        }
        if (params) {
            param = '?' + $.param(params);
        }
        return {
            uri  : base.uri + param,
            type : base.type
        };
    }

    var API = {
        'getProjectList' : {
            uri  : protocol + host + '/api/project-list',
            type : 'POST'
        },
        'createProject'  : {
            uri  : protocol + host + '/api/create-project',
            type : 'POST'
        }

    };

    return makeUp;
});
