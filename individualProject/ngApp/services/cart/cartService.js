var individualProject;
(function (individualProject) {
    var Services;
    (function (Services) {
        var CartService = (function () {
            function CartService($resource) {
                this.$resource = $resource;
                this.cartResource = $resource('/api/orders');
            }
            CartService.prototype.getOrderOnService = function () {
            };
            CartService.prototype.getOrdersOnService = function () {
                return this.cartResource.get().$promise;
            };
            return CartService;
        }());
        Services.CartService = CartService;
        angular.module('individualProject').service('cartService', CartService);
    })(Services = individualProject.Services || (individualProject.Services = {}));
})(individualProject || (individualProject = {}));
