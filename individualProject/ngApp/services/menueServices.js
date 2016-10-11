var individualProject;
(function (individualProject) {
    var Services;
    (function (Services) {
        var MenueService = (function () {
            function MenueService($resource) {
                this.$resource = $resource;
                this.menueResource = $resource('/api/foods/:id', null, {
                    saveFood: {
                        method: 'POST',
                        url: '/api/orders/addfood/:foodId'
                    }
                });
                this.contriesResource = $resource('/api/countries/:id');
            }
            MenueService.prototype.saveFoodOnServiceSide = function (foodId) {
                console.log('!!!!!!!!!!!!!! in savefodd on service');
                return this.menueResource.saveFood({ foodId: foodId }, null);
            };
            MenueService.prototype.getMenuesOnServiceSide = function () {
                return this.menueResource.query().$promise;
            };
            MenueService.prototype.getMenueOnServiceSide = function (menueId) {
                return this.menueResource.get({ id: menueId }).$promise;
            };
            MenueService.prototype.saveMenueOnServiceSide = function (menueToSave) {
                return this.menueResource.save(menueToSave).$promise;
            };
            MenueService.prototype.deleteMenueOnServerSide = function (menueId) {
                return this.menueResource.delete({ id: menueId }).$promise;
            };
            MenueService.prototype.getContriesOnServiceSide = function () {
                return this.contriesResource.query();
            };
            return MenueService;
        }());
        Services.MenueService = MenueService;
        angular.module('individualProject').service('menueService', MenueService);
    })(Services = individualProject.Services || (individualProject.Services = {}));
})(individualProject || (individualProject = {}));
