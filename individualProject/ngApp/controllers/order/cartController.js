var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var CartController = (function () {
            function CartController(cartService, $state) {
                this.cartService = cartService;
                this.$state = $state;
                this.message = 'Let us see what in your cart';
                this.getOrders();
            }
            CartController.prototype.getSum = function (item) {
                this.sum += item;
                demo.innerHTML = this.sum;
            };
            CartController.prototype.getOrders = function () {
                var _this = this;
                this.cartService.getOrdersOnService()
                    .then(function (orders) {
                    console.log(orders);
                    _this.orders = orders;
                })
                    .catch(function () {
                    _this.$state.go('login');
                });
            };
            CartController.prototype.getOrder = function () {
                this.order = this.cartService.getOrderOnService;
            };
            return CartController;
        }());
        Controllers.CartController = CartController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
