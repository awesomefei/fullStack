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
                console.log(this.celebMovies);
            }
            CelebsController.prototype.getCelebs = function () {
                this.celebs = this.celebService.getCelebsOnService();
            };
            CelebsController.prototype.getceleb = function () {
                this.celebMovies = this.celebService.getCelebOnService(this.celebId);
            };
            CelebsController.prototype.likeCeleb = function () {
                console.log(this.celebMovies.like);
                this.celebMovies.like++;
                this.celebService.editCelebOnService(this.celebMovies);
            };
            CelebsController.prototype.dislikeCeleb = function () {
                this.celebMovies.dislike++;
                this.celebService.editCelebOnService(this.celebMovies);
            };
            return CelebsController;
        }());
        Controllers.CelebsController = CelebsController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
