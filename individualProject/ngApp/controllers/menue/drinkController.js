var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var DrinkController = (function () {
            function DrinkController(drinkService, $uibModal, loginService) {
                this.drinkService = drinkService;
                this.$uibModal = $uibModal;
                this.loginService = loginService;
                this.message = 'BACK TO ALL MENUS';
                this.getDrinks();
            }
            DrinkController.prototype.isAdmin = function () {
                return this.loginService.isAdmin() == 'true';
            };
            DrinkController.prototype.getDrinks = function () {
                this.drinks = this.drinkService.getDrinksOnService();
            };
            DrinkController.prototype.tryAddDrink = function () {
                var modal = this.$uibModal;
                modal.open({
                    templateUrl: '/ngApp/views/drinkButton/addDrink.html',
                    controller: individualProject.Controllers.AddDrinkController,
                    controllerAs: 'vm',
                    size: 'ml'
                });
                modal.result.then(function () {
                    console.log('then');
                }).catch(function () {
                    console.log('catch');
                }).finally(function () {
                    console.log('finally');
                });
            };
            DrinkController.prototype.tryEditDrink = function () {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/drinkButton/editDrink.html',
                    controller: individualProject.Controllers.EditDrinkController,
                    controllerAs: 'vm',
                    size: 'ml'
                });
            };
            return DrinkController;
        }());
        Controllers.DrinkController = DrinkController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
