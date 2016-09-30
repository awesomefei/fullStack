var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var Car = (function () {
            function Car(year, make, model) {
                this.year = year;
                this.make = make;
                this.model = model;
            }
            return Car;
        }());
        var CarController = (function () {
            function CarController() {
                this.message = "Welcome to CoderCaps Car Dearlership!!!";
                this.cars = this.getCars();
            }
            CarController.prototype.getCars = function () {
                return [
                    { year: 1989, make: "VW", model: "Fox" },
                    { year: 1988, make: "Nissan", model: "Sentra" },
                    { year: 1996, make: "Ford", model: "Explorer" },
                    { year: 2009, make: "BMW", model: "i325" },
                    { year: 2016, make: "Tesla", model: "Model S" },
                ];
            };
            CarController.prototype.saveCar = function () {
                var carToSave = new Car(this.car.year, this.car.make, this.car.model);
                this.cars.push(carToSave);
            };
            return CarController;
        }());
        angular.module('MyApp').controller('carController', CarController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
