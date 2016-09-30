var App;
(function (App) {
    var Services;
    (function (Services) {
        var TaxService = (function () {
            function TaxService() {
            }
            TaxService.prototype.CalculateTax = function (price) {
                return price * 0.08;
            };
            return TaxService;
        }());
        Services.TaxService = TaxService;
        angular.module('CoolDesk').service('taxService', TaxService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
