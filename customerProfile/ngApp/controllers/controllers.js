var day12_homework;
(function (day12_homework) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($state, customerService, $uibModal) {
                this.$state = $state;
                this.customerService = customerService;
                this.$uibModal = $uibModal;
                this.message = 'Hello from the home page!';
                this.customerToDelete = {};
                this.getCustomers();
            }
            HomeController.prototype.getCustomers = function () {
                this.customers = this.customerService.getCustomersOnService();
            };
            HomeController.prototype.getCustomerDetails = function (id) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/customerDetailShow.html',
                    controller: day12_homework.Controllers.CustomerDetailController,
                    controllerAs: 'controller',
                    resolve: {
                        customerId: function () {
                            return id;
                        }
                    },
                    size: 'sm'
                });
            };
            HomeController.prototype.goToEditPage = function (id) {
                var _this = this;
                console.log(id);
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/customerEditPage.html',
                    controller: day12_homework.Controllers.CustomerDetailController,
                    controllerAs: 'controller',
                    resolve: {
                        customerId: function () {
                            return id;
                        }
                    },
                    size: 'sm'
                }).result.then(function (data) {
                    console.log('odisjfoafsjoij');
                    _this.getCustomers();
                });
            };
            HomeController.prototype.deleteCustomer = function (customerId) {
                var _this = this;
                console.log(customerId);
                this.customerService.deleteCustomerOnService(customerId)
                    .then(function () {
                    console.log('i will go to delete');
                    _this.getCustomers();
                })
                    .catch(function () {
                    console.log("something wrong in customerDelete of controllers.ts");
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = day12_homework.Controllers || (day12_homework.Controllers = {}));
})(day12_homework || (day12_homework = {}));
