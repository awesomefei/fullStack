var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var WatchListController = (function () {
            function WatchListController(movieService, $state) {
                this.movieService = movieService;
                this.$state = $state;
                this.message = 'Hello from the watchlist Controllers';
                this.getMovies();
            }
            WatchListController.prototype.getMovies = function () {
                var _this = this;
                this.movies = this.movieService.getWatchlistOnservice()
                    .then(function (movies) {
                    _this.movies = movies;
                })
                    .catch(function () {
                    _this.$state.go('login');
                });
            };
            return WatchListController;
        }());
        Controllers.WatchListController = WatchListController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
