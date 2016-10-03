var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var CelebsController = (function () {
            function CelebsController(celebService, $stateParams) {
                this.celebService = celebService;
                this.$stateParams = $stateParams;
                this.message = 'hello from CelebsController';
                this.getCelebs();
                this.celebId = this.$stateParams['id'];
                this.getceleb();
                console.log(this.celeb);
            }
            CelebsController.prototype.getCelebs = function () {
                this.celebs = this.celebService.getCelebsOnService();
            };
            CelebsController.prototype.getceleb = function () {
                this.celeb = this.celebService.getCelebOnService(this.celebId);
            };
            CelebsController.prototype.likeCeleb = function () {
                console.log(this.celeb.like);
                this.celeb.like++;
                this.celebService.editCelebOnService(this.celeb);
            };
            CelebsController.prototype.dislikeCeleb = function () {
                this.celeb.dislike++;
                this.celebService.editCelebOnService(this.celeb);
            };
            return CelebsController;
        }());
        Controllers.CelebsController = CelebsController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
