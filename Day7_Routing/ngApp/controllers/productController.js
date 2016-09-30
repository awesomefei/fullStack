var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProductController = (function () {
            function ProductController(productService) {
                this.productService = productService;
                this.products = this.productService.getProducts();
            }
            return ProductController;
        }());
        Controllers.ProductController = ProductController;
        var ProductDetailsController = (function () {
            function ProductDetailsController($stateParams, productService) {
                this.$stateParams = $stateParams;
                this.productService = productService;
                var productId = this.$stateParams['id'];
                this.product = this.productService.getProduct(productId);
            }
            return ProductDetailsController;
        }());
        Controllers.ProductDetailsController = ProductDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
