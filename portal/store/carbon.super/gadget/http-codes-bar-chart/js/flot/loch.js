//result from the request https://localhost:9445/webapp-analytics/api/as-data.jag?start_time=2016-01-26+10%3A12&action=top-http-status

var loch = [{
    "series1": {
        "label": "s",
        "data": [[0.0, 844], [1.0, 200], [2.0, 24], [3.0, 18], [4.0, 11]]
    }
},
    {
        "xaxis": {
            "ticks": [[0.0, 200], [1.0, 304], [2.0, 405], [3.0, 404], [4.0, 302]],
            "axisLabel": "Top 5 HTTP Response codes"
        },

        "yaxis": {"axisLabel": "Number of requests"}
    }];

var x = loch[0];
console.log(x);