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

var publish;

(function () {

    publish = function (btn) {

        var unit = $(btn).attr("data-unit");
        var offset = $(btn).attr("data-offset");
        //alert(unit + " " +offset)
        var now = moment().format('YYYY-MM-DD HH:mm');
        var startDate = moment().subtract(offset, unit).format('YYYY-MM-DD HH:mm');
        gadgets.Hub.publish('timeRangeChangePublisher', {"start": startDate.toString(), "end": now.toString()});
        $('#reportrange').text(startDate+ " - " + now);
    };

    var init = function () {

        $('button[data-unit=hours]').on('click', function () {
            publish(this);
        });

        $('#dayBtn').on('click', function () {
            publish(this);
        });

        $('#weekBtn').on('click', function () {
            publish(this);
        });

        $('#monthBtn').on('click', function () {
            publish(this);
        });

    };
    init();
})();


