var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var NavBarController = (function () {
            function NavBarController(loginService, $state) {
                this.loginService = loginService;
                this.$state = $state;
                this.mesesage = 'welcome :';
            }
            NavBarController.prototype.getUsername = function () {
                return this.loginService.getUsername();
            };
            NavBarController.prototype.isAdmin = function () {
                return this.loginService.isAdmin();
            };
            NavBarController.prototype.logout = function () {
                this.loginService.logout();
                this.$state.go('login');
            };
            return NavBarController;
        }());
        angular.module('individualProject').controller('navbarController', NavBarController);
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
