var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var MenueDetailController = (function () {
            function MenueDetailController($state, menueService) {
                this.$state = $state;
                this.menueService = menueService;
                this.MenueToCreat = {};
            }
            MenueDetailController.prototype.saveMenue = function () {
                var _this = this;
                this.menueService.saveMenueOnServiceSide(this.MenueToCreat)
                    .then(function () {
                    _this.$state.go('menue');
                })
                    .catch(function () {
                    console.log('something went wrong in saveMenue');
                });
            };
            return MenueDetailController;
        }());
        Controllers.MenueDetailController = MenueDetailController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
