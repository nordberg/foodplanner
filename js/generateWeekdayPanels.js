var days = new Array(7);
var today = new Date();

for (i = 0; i < days.length; i++) {
    days[i] = new Array(2);
}

days[0] = ['Måndag', 'mon'];
days[1] = ['Tisdag', 'tue'];
days[2] = ['Onsdag', 'wed'];
days[3] = ['Torsdag', 'thurs'];
days[4] = ['Fredag', 'fri'];
days[5] = ['Lördag', 'sat'];
days[6] = ['Söndag', 'sun'];

for (i = 0; i < days.length; i++) {
    var name = days[today.getDay()][0];
    var code = days[today.getDay()][1];

    var row = $(document.createElement('div'));
    row.addClass('row');

    var panel = $(document.createElement('div'));
    panel.addClass('panel panel-default');
    if (i == 0) {
        panel.addClass('panel-primary');
        $('#todayFoodId').text('Idag är det '+ name);
    }
    panel.attr('id', code + 'Panel');
    panel.attr('style', 'width:95%');

    var panelHeading = $(document.createElement('div'));
    panelHeading.addClass('panel-heading');

    var span = $(document.createElement('span'));
    span.addClass('label label-primary');
    span.text(name + " (" + today.getDate() + "/" + (today.getMonth() + 1) + ")");

    var panelBody = $(document.createElement('div'));
    panelBody.addClass('panel-body');

    var content = $(document.createElement('p'));
    content.attr('id', code + 'FoodId');

    panelBody.append(content);

    panel.append(panelHeading);
    panelHeading.append(span);

    panel.append(panelBody);

    row.append(panel);

    $('#weekdayMenuId').append(row);

    today.setDate(today.getDate() + 1);
}

getTodayFood = function() {

};

getTodayCook = function() {

};