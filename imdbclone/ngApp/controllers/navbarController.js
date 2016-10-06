var imdbclone;
(function (imdbclone) {
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
        angular.module('imdbclone').controller('navbarController', NavBarController);
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
