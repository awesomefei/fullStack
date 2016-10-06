var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController(loginService, $state) {
                this.loginService = loginService;
                this.$state = $state;
            }
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
