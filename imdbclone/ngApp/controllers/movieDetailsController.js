var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var MovieDetailsController = (function () {
            function MovieDetailsController(movieService, $uibModal, $stateParams) {
                this.movieService = movieService;
                this.$uibModal = $uibModal;
                this.$stateParams = $stateParams;
                this.message = 'hello from MovieDetailsController';
                this.comment = {};
                this.movieId = this.$stateParams['id'];
                this.getMovie();
            }
            MovieDetailsController.prototype.getTagDetails = function (id) {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/tagDetails.html',
                    controller: imdbclone.Controllers.TagDetailsController,
                    controllerAs: 'vm',
                    resolve: {
                        tagId: function () { return id; },
                    },
                    size: 'sm'
                }).result.then(function (data) {
                    console.log(data),
                        _this.get;
                });
            };
            MovieDetailsController.prototype.getMovie = function () {
                this.movieTag = this.movieService.getMovieOnService(this.movieId);
            };
            ;
            MovieDetailsController.prototype.saveComment = function () {
                var _this = this;
                this.movieService.saveComment(this.movieId, this.comment)
                    .then(function () {
                    _this.getMovie();
                })
                    .then(function () {
                    _this.comment = '';
                });
            };
            ;
            return MovieDetailsController;
        }());
        Controllers.MovieDetailsController = MovieDetailsController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
