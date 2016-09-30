var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(productService) {
                this.productService = productService;
                this.message = "Hello from HomeController";
                this.products = this.getProducts();
            }
            HomeController.prototype.getProducts = function () {
                return this.productService.getProducts();
            };
            return HomeController;
        }());
        angular.module('CoolDesk').controller('homeController', HomeController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
