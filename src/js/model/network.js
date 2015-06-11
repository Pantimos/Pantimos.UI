/* global define */
define(function(require) {

    var $ = window.$;
    var debug = require('./debug');
    var config = require('./config');
    var dataStatus = 'data-network-status';
    debug('log');

    var failCode = {
        'NETWORK_ERROR' : 500,
        'REQUEST_ERROR' : 400
    };

    var body = $('body');

    function requestApi(type, uriParams, data, success, fail) {

        function innerSuccess(response) {

            body.attr(dataStatus, '');
            debug.debug('[请求成功]当前接口:', type, ' 返回内容:', response);

            if (response && response.status && response.status === 'success') {
                if (success) {
                    if (response.data) {
                        return success(response.data);
                    } else {
                        return success(response);
                    }
                }
                return true;
            } else {
                return innerFail(response);
            }
        }

        function innerFail(response) {

            body.attr(dataStatus, '');
            debug.debug('[请求失败]当前接口:', type, ' 返回内容:', response);

            if (response && response.status && response.status === 'fail') {
                if (fail) {
                    if (response.data) {
                        return fail(response.data, failCode.REQUEST_ERROR);
                    } else {
                        return fail(response, failCode.REQUEST_ERROR);
                    }
                }
            } else {
                return fail(response, failCode.NETWORK_ERROR);
            }
        }

        var api = config(type, uriParams);


        var status = body.attr(dataStatus);
        if (status && status === 'locked') {
            // 理论不存在此情况
            debug.warn('正在请求接口中，请勿重复提交。');
            return false;
        } else {
            body.attr(dataStatus, 'locked');

            $.ajax({
                type        : api.type,
                url         : api.uri,
                data        : JSON.stringify(data),
                contentType : 'application/json',
                success     : innerSuccess,
                error       : innerFail
            });
        }
    }

    return {
        request : requestApi
    };
});
