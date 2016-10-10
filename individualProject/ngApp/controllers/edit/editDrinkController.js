var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var EditDrinkController = (function () {
            function EditDrinkController(drinkService, $uibModalInstance) {
                this.drinkService = drinkService;
                this.$uibModalInstance = $uibModalInstance;
                this.message = 'Hello from edit drink modal';
            }
            EditDrinkController.prototype.getDrink = function () {
                this.drink = this.drinkService.getDrinkOnservice(this.drinkId);
            };
            EditDrinkController.prototype.editDrink = function () {
                var _this = this;
                this.drinkService.editDrinkOnService(this.drink)
                    .then(function () {
                    console.log('!!!!!!!!!!!!!!!????????????? go  drink state');
                    _this.$uibModalInstance.close("closed");
                })
                    .catch(function () {
                    alert('something went wrong in editDrink');
                });
            };
            return EditDrinkController;
        }());
        Controllers.EditDrinkController = EditDrinkController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
