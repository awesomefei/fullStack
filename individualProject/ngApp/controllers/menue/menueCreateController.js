var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var MenueCreateController = (function () {
            function MenueCreateController(menueService, $state) {
                this.menueService = menueService;
                this.$state = $state;
            }
            MenueCreateController.prototype.saveMenue = function () {
                this.menueService.saveMenueOnServiceSide(this.menue)
                    .then(function () {
                })
                    .catch(function () {
                    console.log('something went wrong from MenueCreateController.saveMenue');
                });
            };
            return MenueCreateController;
        }());
        Controllers.MenueCreateController = MenueCreateController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
