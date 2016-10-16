var imdbclone;
(function (imdbclone) {
    var Services;
    (function (Services) {
        var HomeMovieService = (function () {
            function HomeMovieService($resource) {
                this.twiResource = $resource('/api/twitters');
                this.homeMovieResource = $resource('/api/homeMovies/:id', null, {
                    saveComment: {
                        method: 'POST',
                        url: '/api/homeMoves/comments/:homeMovieId'
                    },
                    saveDirector: {
                        method: 'POST',
                        url: '/api/homeMoves/direcor/:homeMovieId'
                    },
                });
            }
            HomeMovieService.prototype.getTwitterOnService = function () {
                return this.twiResource.query();
            };
            HomeMovieService.prototype.getHomeMoviesOnService = function () {
                return this.homeMovieResource.query();
            };
            HomeMovieService.prototype.getHomeMovieOnService = function (movieId) {
                return this.homeMovieResource.get({ id: movieId });
            };
            HomeMovieService.prototype.saveHomeMovieOnService = function (homeMovie) {
                return this.homeMovieResource.save(homeMovie).$promise;
            };
            HomeMovieService.prototype.deleteHomeMovie = function (id) {
                return this.homeMovieResource.delete({ id: id }).$promise;
            };
            HomeMovieService.prototype.saveComment = function (homeMovieId, comment) {
                return this.homeMovieResource.saveComment({ homeMovieId: homeMovieId }, comment).$promise;
            };
            return HomeMovieService;
        }());
        Services.HomeMovieService = HomeMovieService;
        angular.module('imdbclone').service('homeMovieService', HomeMovieService);
    })(Services = imdbclone.Services || (imdbclone.Services = {}));
})(imdbclone || (imdbclone = {}));
