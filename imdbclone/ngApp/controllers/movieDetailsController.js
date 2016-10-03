var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var MovieDetailsController = (function () {
            function MovieDetailsController(movieService, $stateParams) {
                this.movieService = movieService;
                this.$stateParams = $stateParams;
                this.message = 'hello from MovieDetailsController';
                this.comment = {};
                this.movieId = this.$stateParams['id'];
                this.getMovie();
            }
            MovieDetailsController.prototype.getMovie = function () {
                this.movie = this.movieService.getMovieOnService(this.movieId);
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
