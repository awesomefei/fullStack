var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var CartController = (function () {
            function CartController(cartService, $state, $scope) {
                this.cartService = cartService;
                this.$state = $state;
                this.$scope = $scope;
                this.message = 'Let us see what in your cart';
                this.sum = 0;
                this.getOrders();
            }
            CartController.prototype.clearOrder = function () {
                var _this = this;
                console.log('!!!!!!!!!! cart controler active @@@@@@@@');
                this.cartService.clearOrderOnService(this.orders)
                    .then(function () {
                    console.log('!!!!!!!!!! cart controler then active @@@@@@@@');
                    _this.getOrders();
                    _this.sum = 0;
                });
            };
            CartController.prototype.getSum = function (foods) {
                for (var i = 0; i < foods.length; i++) {
                    this.sum += foods[i].price;
                }
            };
            CartController.prototype.getOrders = function () {
                var _this = this;
                this.cartService.getOrdersOnService()
                    .then(function (orders) {
                    console.log(orders.foods);
                    _this.getSum(orders.foods);
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
