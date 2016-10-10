var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var AddDrinkController = (function () {
            function AddDrinkController(drinkService) {
                this.drinkService = drinkService;
                this.message = 'Hello from add drink modal';
            }
            AddDrinkController.prototype.getDrink = function () {
                this.drink = this.drinkService.getDrinkOnservice(this.drinkId);
            };
            AddDrinkController.prototype.addDrink = function () {
                this.drinkService.saveDrinkOnService(this.drink);
            };
            return AddDrinkController;
        }());
        Controllers.AddDrinkController = AddDrinkController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
