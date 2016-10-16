var imdbclone;
(function (imdbclone) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(homeMovieService) {
                this.homeMovieService = homeMovieService;
                this.message = 'Hello from the home page!';
                this.getGirlMovie();
                this.getHomeMovies();
                this.getTwitters();
            }
            HomeController.prototype.getTwitters = function () {
                this.twitters = this.homeMovieService.getTwitterOnService();
            };
            HomeController.prototype.getHomeMovies = function () {
                console.log('before');
                this.homeMovies = this.homeMovieService.getHomeMoviesOnService();
                console.log('after');
            };
            HomeController.prototype.getGirlMovie = function () {
                this.girlMovie = this.homeMovieService.getHomeMovieOnService('57f153a0c368641b139562be');
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = imdbclone.Controllers || (imdbclone.Controllers = {}));
})(imdbclone || (imdbclone = {}));
