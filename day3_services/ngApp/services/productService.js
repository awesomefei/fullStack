var App;
(function (App) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService() {
            }
            ProductService.prototype.getProducts = function () {
                return [
                    { name: ' Laptop', price: 199.99 },
                    { name: ' Milk', price: 9.99 },
                    { name: ' Coffee', price: 5.99 },
                ];
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
        angular.module('CoolDesk').service('productService', ProductService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
