var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService() {
                this.products = [
                    { id: 1, name: "Milk", price: 3.12 },
                    { id: 2, name: "Eggs", price: 1.12 },
                    { id: 3, name: "Icecream", price: 3.50 },
                ];
            }
            ProductService.prototype.getProducts = function () {
                return this.products;
            };
            ProductService.prototype.getProduct = function (id) {
                var productToReturn;
                for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                    var p = _a[_i];
                    if (p.id == id) {
                        return p;
                    }
                }
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
        angular.module('MyApp').service('productService', ProductService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
