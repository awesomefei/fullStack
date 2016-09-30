var App;
(function (App) {
    var Food;
    (function (Food) {
        var FoodController = (function () {
            function FoodController() {
                this.food = [{ name: 'Milk', price: 2.33 },
                    { name: 'Marzipan', price: 99.88 },
                    { name: 'Mustard', price: 6.77 },
                    { name: 'Eggs', price: 3.44 }];
            }
            return FoodController;
        }());
        angular.module("MyApp").controller('FoodController', FoodController);
    })(Food = App.Food || (App.Food = {}));
})(App || (App = {}));
