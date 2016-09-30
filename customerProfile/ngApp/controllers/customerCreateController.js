var day12_homework;
(function (day12_homework) {
    var Controllers;
    (function (Controllers) {
        var CustomerCreateController = (function () {
            function CustomerCreateController($state, customerService) {
                this.$state = $state;
                this.customerService = customerService;
                this.customerToCreate = {};
            }
            CustomerCreateController.prototype.saveCustomer = function () {
                var _this = this;
                console.log('_________________');
                console.log(this.customerToCreate);
                this.customerService.saveCustomerOnService(this.customerToCreate)
                    .then(function () {
                    console.log("I will go home from CustomerCreateController");
                    _this.$state.go('home');
                })
                    .catch(function () {
                    console.log("something went wrong in customerCreate");
                });
            };
            return CustomerCreateController;
        }());
        Controllers.CustomerCreateController = CustomerCreateController;
    })(Controllers = day12_homework.Controllers || (day12_homework.Controllers = {}));
})(day12_homework || (day12_homework = {}));
