var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var Product = (function () {
            function Product(name, price) {
                this.name = name;
                this.price = price;
            }
            return Product;
        }());
        var ProductController = (function () {
            function ProductController() {
                this.message = "it's working";
                this.products = this.getProducts();
            }
            ProductController.prototype.getProducts = function () {
                return [
                    { name: "Milk", price: "2.3" },
                ];
            };
            ProductController.prototype.saveProduct = function () {
                var productToSave = new Product(this.product.name, this.product.price);
                this.products.push(productToSave);
            };
            return ProductController;
        }());
        angular.module("homeApp").controller('productController', ProductController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
