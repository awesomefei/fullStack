var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController(loginService, $state) {
                this.loginService = loginService;
                this.$state = $state;
                this.message = 'Hello from login Controller';
            }
            LoginController.prototype.login = function () {
                var _this = this;
                console.log("@@@@@@@@@@@@ LoginController + " + this.loginInfo);
                this.loginService.login(this.loginInfo)
                    .then(function () {
                    _this.$state.go('cart');
                })
                    .catch(function () {
                    alert('login failed');
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
