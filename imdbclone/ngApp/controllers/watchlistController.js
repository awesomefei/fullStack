var watchlist;
(function (watchlist) {
    var Controllers;
    (function (Controllers) {
        var WatchListController = (function () {
            function WatchListController(movieService, $state) {
                this.movieService = movieService;
                this.$state = $state;
                this.message = 'Hello from the watchlist Controllers';
            }
            WatchListController.prototype.getMovies = function () {
                var _this = this;
                this.movies = this.movieService.getMoviesOnService()
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
    })(Controllers = watchlist.Controllers || (watchlist.Controllers = {}));
})(watchlist || (watchlist = {}));
