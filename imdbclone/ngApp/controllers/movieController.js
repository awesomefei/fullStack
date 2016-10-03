var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var MovieController = (function () {
            function MovieController(movieService) {
                this.movieService = movieService;
                this.message = 'Hello from the movie page!';
                this.getMovies();
            }
            MovieController.prototype.getMovies = function () {
                this.movies = this.movieService.getMoviesOnService();
            };
            return MovieController;
        }());
        Controllers.MovieController = MovieController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
