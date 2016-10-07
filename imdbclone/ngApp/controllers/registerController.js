var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var RegisterController = (function () {
            function RegisterController(loginService, $state, $uibModalInstance, $uibModal) {
                this.loginService = loginService;
                this.$state = $state;
                this.$uibModalInstance = $uibModalInstance;
                this.$uibModal = $uibModal;
            }
            RegisterController.prototype.register = function () {
                var _this = this;
                this.loginService.registerOnService(this.loginInfo)
                    .then(function () {
                    console.log('register success');
                    _this.$uibModalInstance.close();
                })
                    .catch(function () {
                    alert('Creation failed');
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
