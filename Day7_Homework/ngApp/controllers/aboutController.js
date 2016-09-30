var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var AboutController = (function () {
            function AboutController() {
                this.message = "Hello from the AboutController";
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
