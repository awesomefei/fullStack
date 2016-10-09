var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var DrinkController = (function () {
            function DrinkController(drinkService, $uibModal) {
                this.drinkService = drinkService;
                this.$uibModal = $uibModal;
                this.message = 'BACK TO ALL MENUS';
                this.getDrinks();
            }
            DrinkController.prototype.getDrinks = function () {
                this.drinks = this.drinkService.getDrinksOnService();
            };
            DrinkController.prototype.tryAddDrink = function () {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/addDrink.html',
                    controller: individualProject.Controllers.AddDrinkController,
                    controllerAs: 'vm',
                    size: 'sm'
                });
            };
            return DrinkController;
        }());
        Controllers.DrinkController = DrinkController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
