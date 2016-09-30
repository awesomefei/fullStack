var day12_homework;
(function (day12_homework) {
    var Controllers;
    (function (Controllers) {
        var CustomerDetailController = (function () {
            function CustomerDetailController(customerId, customerService, $uibModalInstance, $state) {
                this.customerId = customerId;
                this.customerService = customerService;
                this.$uibModalInstance = $uibModalInstance;
                this.$state = $state;
                this.getCustomer();
                this.isEditMode = true;
            }
            CustomerDetailController.prototype.closeModal = function () {
                this.$uibModalInstance.close({ test: 'test' });
            };
            CustomerDetailController.prototype.toggleEditMode = function () {
                this.isEditMode = !this.isEditMode;
                console.log(this.isEditMode);
            };
            CustomerDetailController.prototype.getCustomer = function () {
                var _this = this;
                this.customerService.getCustomerOnService(this.customerId)
                    .then(function (data) {
                    _this.customer = data;
                });
            };
            CustomerDetailController.prototype.getCustomers = function () {
                this.customers = this.customerService.getCustomersOnService();
            };
            CustomerDetailController.prototype.saveCustomer = function () {
                this.customerService.saveCustomerOnService(this.customer)
                    .then(function () {
                    console.log('i will go to save in customnerDetailController');
                })
                    .catch(function () {
                    console.log('something went wrong in saveCustomer...');
                });
            };
            CustomerDetailController.prototype.cancelSave = function () {
                this.getCustomers();
                this.toggleEditMode();
            };
            return CustomerDetailController;
        }());
        Controllers.CustomerDetailController = CustomerDetailController;
    })(Controllers = day12_homework.Controllers || (day12_homework.Controllers = {}));
})(day12_homework || (day12_homework = {}));
