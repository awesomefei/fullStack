var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.message = "hello from HomeController";
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
