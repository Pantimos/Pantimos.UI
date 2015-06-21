/**
* mock-list
*
* @date 2015-06-21
*/
/* global define */
define(function () {
    'use strict';

function render(it) {
var out='<table class="table table table-bordered table-hover js-table-mock-list"> <thead> <tr> <th class="col-md-11">项目名称</th> <th class="col-md-1">删除项目</th> </tr> </thead> <tbody> ';var arr1=it;if(arr1){var item,index=-1,l1=arr1.length-1;while(index<l1){item=arr1[index+=1];out+=' <tr> <td>'+(item.name)+'</td> <td> ';if(item.mock){out+=' <a class="button button-pill button-tiny button-circle button-caution js-remove-mock" href="#"><i class="fa fa-minus"></i></a> ';}out+=' ';if(!item.mock){out+=' <a class="button button-pill button-tiny button-circle button-action js-create-mock" href="#"><i class="fa fa-plus"></i></a> ';}out+=' </td> </tr> ';} } out+=' </tbody></table>';return out;
}
    return render;
});