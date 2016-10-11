var individualProject;
(function (individualProject) {
    var Controllers;
    (function (Controllers) {
        var MenueController = (function () {
            function MenueController($state, $uibModal, menueService) {
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.menueService = menueService;
                this.message = "Hello from menuController";
                this.menues = [];
                this.getMenues();
            }
            MenueController.prototype.saveFood = function (foodId) {
                this.menueService.saveFoodOnServiceSide(foodId);
            };
            MenueController.prototype.getFood = function () {
                this.food = this.menueService.getMenueOnServiceSide(this.foodId);
            };
            MenueController.prototype.getMenues = function () {
                var _this = this;
                this.menueService.getMenuesOnServiceSide()
                    .then(function (menueArr) {
                    var i;
                    var k;
                    var cols = 4;
                    for (i = 0, k = -1; i < menueArr.length; i++) {
                        if (i % cols == 0) {
                            k++;
                            _this.menues[k] = [];
                        }
                        _this.menues[k].push(menueArr[i]);
                    }
                    console.log(_this.menues);
                });
            };
            MenueController.prototype.goToEiditPage = function (menueId) {
                this.$state.go('MenueEdit', { id: menueId });
            };
            MenueController.prototype.deleteMenue = function (menueId) {
                var _this = this;
                this.menueService.deleteMenueOnServerSide(menueId)
                    .then(function () {
                    _this.getMenues();
                })
                    .catch(function () {
                    console.log("something went wrong...");
                });
            };
            MenueController.prototype.getMenueDetails = function (id) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/menueDetail.html',
                    controller: individualProject.Controllers.MenueDetailController,
                    controllerAs: 'controller',
                    resolve: {
                        customerId: function () {
                            return id;
                        }
                    },
                    size: 'sm'
                });
            };
            return MenueController;
        }());
        Controllers.MenueController = MenueController;
        var MenueEditController = (function () {
            function MenueEditController($state, $stateParams, menueService) {
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.menueService = menueService;
                this.menueToEdit = {};
                var menueId = this.$stateParams['id'];
                this.menueToEdit = this.menueService.getMenueOnServiceSide;
            }
            MenueEditController.prototype.saveMenue = function () {
                var _this = this;
                this.menueService.saveMenueOnServiceSide(this.menueToEdit)
                    .then(function () {
                    _this.$state.go('menue');
                })
                    .catch(function () {
                    console.log('something went wrong in saveMenue');
                });
            };
            return MenueEditController;
        }());
        Controllers.MenueEditController = MenueEditController;
    })(Controllers = individualProject.Controllers || (individualProject.Controllers = {}));
})(individualProject || (individualProject = {}));
