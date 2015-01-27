window.onload = function() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0]=  'sun';
    weekday[1] = 'mon';
    weekday[2] = 'tue';
    weekday[3] = 'wed';
    weekday[4] = 'thurs';
    weekday[5] = 'fri';
    weekday[6] = 'sat';

    var n = weekday[d.getDay()];

    $('#' + n + 'Panel').attr('class', 'panel panel-primary');
    $('#todayFoodId').text('Idag: ' + $('#' + n + 'FoodId').text());
    
}