var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var MenueContactController = (function () {
            function MenueContactController(menueService) {
                this.menueService = menueService;
                this.message = 'hello from MenueContactController';
                this.contries = menueService.getContriesOnServiceSide();
            }
            return MenueContactController;
        }());
        Controllers.MenueContactController = MenueContactController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
