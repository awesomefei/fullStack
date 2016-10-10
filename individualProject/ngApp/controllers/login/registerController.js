var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var RegisterController = (function () {
            function RegisterController(loginService, $state) {
                this.loginService = loginService;
                this.$state = $state;
            }
            RegisterController.prototype.register = function () {
                var _this = this;
                this.loginService.registerOnService(this.loginInfo)
                    .then(function () {
                    console.log('register success');
                    _this.$state.go('login');
                })
                    .catch(function (err) {
                    alert(err);
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
