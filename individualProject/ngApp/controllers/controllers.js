var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.message = 'Welcome to WOW restaurant!';
            }
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
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
