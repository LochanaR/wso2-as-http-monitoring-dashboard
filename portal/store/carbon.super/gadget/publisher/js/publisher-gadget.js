/*
 *
 *  Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 * /
 *
 */
$(function() {

        $('#reportrange').daterangepicker({
        "autoApply": true,
        "alwaysShowCalendars": true,
        opens: "left"
    }, callbackDateRangePicker);

});

var callbackDateRangePicker = function (start, end,label) {
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    console.log("Date range chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    publish(start,end);
};

$(window).load(function(){
    var datePicker = $('.daterangepicker'),
        parentWindow = window.parent.document,
        thisParentWrapper = $('#'+gadgets.rpc.RPC_ID, parentWindow).closest('.gadget-body');

    $('head', parentWindow).append('<link rel="stylesheet" type="text/css" href="../../store/carbon.super/gadget/publisher/css/daterangepicker.css" />');
    $('body', parentWindow).append('<script src="../../store/carbon.super/gadget/publisher/js/daterangepicker.js" type="text/javascript"></script>');
    $(thisParentWrapper).append(datePicker);
    $(thisParentWrapper).closest('.ues-component-box').addClass('widget form-control-widget');


});

var publish = function (start, end) {
    var formattedEnd = end.format('YYYY-MM-DD HH:mm');
    var formattedStart = start.format('YYYY-MM-DD HH:mm');
    gadgets.Hub.publish('timeRangeChangePublisher', {"start": formattedStart.toString(), "end": formattedEnd.toString()});
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
};

var getTimeFromButton = function(btn){
    var endTime = moment();
    var startTime = moment().subtract($(btn).attr("data-unit"), $(btn).attr("data-offset"));
    return [startTime, endTime];
};

$('button[data-unit=hours]').on('click', function () {
    var array = getTimeFromButton(this);
    publish(array[0], array[1]);
});

$('#dayBtn').on('click', function () {
    var array = getTimeFromButton(this);
    publish(array[0], array[1]);
});

$('#weekBtn').on('click', function () {
    var array = getTimeFromButton(this);
    publish(array[0], array[1]);
});

$('#monthBtn').on('click', function () {
    var array = getTimeFromButton(this);
    publish(array[0], array[1]);
});
$(".type").click(function(){
    $(".type").removeClass("active");
    $(this).addClass("active");
});

