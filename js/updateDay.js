if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}
$('#addFoodBtn').click( function() {
    var food = $('#mealId').val();
    var cook = $('#cookId').val();
    var weekday = $('#weekdayId').val();
    var recipe = $('#recipeId').val();

    var htmlString = '';

    if (recipe) {
        if (!recipe.match(/^http([s]?):\/\/.*/)) {
            recipe = 'http://' + recipe;
        }

        htmlString = cook + ' lagar <a href=\"' + recipe + '\"> ' + food + '</a>';
    } else {
        htmlString = cook + ' lagar ' + food + ' (Inget recept)';
    }

    

    console.log(cook + ' is making ' + food + ' on ' + weekday);

    $('#' + weekday + 'FoodId').html(htmlString);
}); 