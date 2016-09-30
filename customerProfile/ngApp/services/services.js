var day12_homework;
(function (day12_homework) {
    var Services;
    (function (Services) {
        var CusomerService = (function () {
            function CusomerService($resource) {
                this.$resource = $resource;
                this.customerResource = $resource('/api/customers/:id');
            }
            CusomerService.prototype.getCustomerOnService = function (customerId) {
                return this.customerResource.get({ id: customerId }).$promise;
            };
            ;
            CusomerService.prototype.getCustomersOnService = function () {
                return this.customerResource.query();
            };
            ;
            CusomerService.prototype.saveCustomerOnService = function (customerToSave) {
                console.log("I am in save service");
                return this.customerResource.save(customerToSave).$promise;
            };
            CusomerService.prototype.deleteCustomerOnService = function (customerId) {
                return this.customerResource.delete({ id: customerId }).$promise;
            };
            return CusomerService;
        }());
        Services.CusomerService = CusomerService;
        angular.module('day12_homework').service('customerService', CusomerService);
    })(Services = day12_homework.Services || (day12_homework.Services = {}));
})(day12_homework || (day12_homework = {}));
