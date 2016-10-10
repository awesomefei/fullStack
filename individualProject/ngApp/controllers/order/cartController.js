var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var CartController = (function () {
            function CartController(cartService, $state) {
                this.cartService = cartService;
                this.$state = $state;
                this.message = 'hello from cart controller';
                this.getOrders();
            }
            CartController.prototype.getOrders = function () {
                var _this = this;
                this.orders = this.cartService.getOrdersOnService()
                    .then(function (orders) {
                    _this.orders = orders;
                })
                    .catch(function () {
                    _this.$state.go('login');
                });
            };
            return CartController;
        }());
        Controllers.CartController = CartController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
