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
    }
    panel.attr('id', code + 'Panel');
    panel.attr('style', 'width:95%');

    var panelHeading = $(document.createElement('div'));
    panelHeading.addClass('panel-heading');

    var span = $(document.createElement('span'));
    span.addClass('label label-primary');
    span.text(name + " (" + today.getDate() + "/" + (today.getMonth() + 1) + ")");

    var editIcon = $(document.createElement('span'));
    editIcon.addClass('glyphicon glyphicon-pencil');
    editIcon.css('float', 'right');

    var panelBody = $(document.createElement('div'));
    panelBody.addClass('panel-body');

    var content = $(document.createElement('div'));

    var showContent = $(document.createElement('div'));
    showContent.attr('id', code + 'ShowContentId');
    showContent.html('<span id=\'' + code + 'Cook\'></span> lagar <span id=\'' + code + 'Food\'></span>!');

    var editContent = $(document.createElement('div'));
    editContent.attr('id', code + 'EditContentId');

    var inputFood = $(document.createElement('div'));
    inputFood.addClass('input-group');

    var inputFoodForm = $(document.createElement('input'));
    inputFoodForm.attr('type', 'text');
    inputFoodForm.attr('placeholder', 'Maträtt');
    inputFoodForm.addClass('form-control');
    inputFood.append(inputFoodForm);

    editContent.append(inputFood);

    content.append(editContent);
    content.append(showContent);

    editContent.hide();

    panelBody.append(content);

    panel.append(panelHeading);
    panelHeading.append(span);
    panelHeading.append(editIcon);

    panel.append(panelBody);

    row.append(panel);

    $('#weekdayMenuId').append(row);

    // TODO: This icon should show/hide the edit/show content stuff. Not working.
    editIcon.click( function() {
        console.log('Editing ' + code);
        $('#' + code + 'EditContentId').show();
        $('#' + code + 'ShowContentId').show();
    });


    //$('#' + code + 'Cook').text('Marcus');
    //$('#' + code + 'Food').text('Köttbullar');
    today.setDate(today.getDate() + 1);
}