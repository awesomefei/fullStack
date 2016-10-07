var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController(loginService, $state, $uibModal) {
                this.loginService = loginService;
                this.$state = $state;
                this.$uibModal = $uibModal;
            }
            LoginController.prototype.tryTologin = function () {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/loginDetail.html',
                    controller: imdbclone.Controllers.RegisterController,
                    controllerAs: 'vm',
                    size: 'sm'
                });
            };
            ;
            LoginController.prototype.tryToRegister = function () {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/register.html',
                    controller: imdbclone.Controllers.RegisterController,
                    controllerAs: 'vm',
                    size: 'sm'
                });
            };
            ;
            LoginController.prototype.login = function () {
                var _this = this;
                this.loginService.login(this.loginInfo)
                    .then(function () {
                    _this.$state.go('watchlist');
                })
                    .catch(function () {
                    alert('login failed');
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
