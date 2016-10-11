var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var DeleteDrinkController = (function () {
            function DeleteDrinkController(drinkService, $uibModalInstance) {
                this.drinkService = drinkService;
                this.$uibModalInstance = $uibModalInstance;
                this.message = 'Hello from delete drink modal';
            }
            DeleteDrinkController.prototype.getDrink = function () {
                this.drink = this.drinkService.getDrinkOnservice(this.drinkId);
            };
            DeleteDrinkController.prototype.deleteDrink = function () {
                var _this = this;
                this.drinkService.deletDrinkOnService(this.drink._id)
                    .then(function () {
                    _this.$uibModalInstance.close();
                });
            };
            return DeleteDrinkController;
        }());
        Controllers.DeleteDrinkController = DeleteDrinkController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
