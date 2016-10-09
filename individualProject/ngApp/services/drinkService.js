var individualProject;
(function (individualProject) {
    var Services;
    (function (Services) {
        var DrinkService = (function () {
            function DrinkService($resource) {
                this.$resource = $resource;
                this.drinkResource = this.$resource('/api/drinks:id');
            }
            DrinkService.prototype.getDrinksOnService = function () {
                return this.drinkResource.query();
            };
            DrinkService.prototype.getDrinkOnservice = function (id) {
                return this.drinkResource.get({ id: id });
            };
            DrinkService.prototype.saveDrinkOnService = function (drink) {
                return this.drinkResource.save(drink).$promise;
            };
            DrinkService.prototype.deletDrinkOnService = function (id) {
                return this.drinkResource.delete({ id: id }).$promise;
            };
            DrinkService.prototype.editDrinkOnService = function (drink) {
                return this.drinkResource.edit(drink).$promise;
            };
            return DrinkService;
        }());
        Services.DrinkService = DrinkService;
        angular.module('individualProject').service('drinkService', DrinkService);
    })(Services = individualProject.Services || (individualProject.Services = {}));
})(individualProject || (individualProject = {}));
