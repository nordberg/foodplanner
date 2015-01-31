var Meal = function (date, cook, food, recipe) {
    this.date = date;
    this.cook = cook;
    this.food = food;
    this.recipe = recipe;
};

Meal.prototype.getDate = function() {
    return this.date;
};

Meal.prototype.getCook= function() {
    return this.cook;
};

Meal.prototype.getFood = function() {
    return this.food;
};

Meal.prototype.getRecipe = function() {
    return this.recipe;
};

Meal.prototype.setDate = function(newDate) {
    this.date = newDate;
};

Meal.prototype.setCook= function(newCook) {
    this.cook = newCook;
};

Meal.prototype.setFood = function(newFood) {
    this.food = newFood;
};

Meal.prototype.setRecipe = function(newRecipe) {
    this.recipe = newRecipe;
};