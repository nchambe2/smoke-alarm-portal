/*
 * Takes a timespan in seconds and the path it should redirect to (as a
 * string)
 * 
 * Fills a countdown span
 * Redirects page to "home" after timespan
 * 
 * Inspired by: http://stackoverflow.com/a/16532611/6005068
*/
function refresh (timespan, home) {
    msTimespan = timespan*1000;
    $(".countdown").html(timespan);
    $(".countdown").css('font-weight', 'bold');
    if (timespan > 0) {
        timespan = timespan - 1;
        setTimeout(function(){ refresh(timespan, home); }, '1000');
    }
    else {
        window.location = home;
    }
};


$(document).ready(function() {
    refresh('30', '/kiosk');
});
