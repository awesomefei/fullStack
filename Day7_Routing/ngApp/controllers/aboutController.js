var MyApp;
(function (MyApp) {
    var controller;
    (function (controller) {
        var AboutController = (function () {
            function AboutController() {
                this.message = "Hello from the AboutController";
            }
            return AboutController;
        }());
        controller.AboutController = AboutController;
        angular.module("MyApp").controller('aboutController', AboutController);
    })(controller = MyApp.controller || (MyApp.controller = {}));
})(MyApp || (MyApp = {}));
