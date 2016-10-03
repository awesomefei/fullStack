var imdbclone;
(function (imdbclone) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.movieResource = $resource('/api/movies/:id', null, {
                    saveComment: {
                        method: 'POST',
                        url: '/api/movies/comments/:movieId'
                    },
                });
            }
            MovieService.prototype.getMoviesOnService = function () {
                return this.movieResource.query();
            };
            MovieService.prototype.getMovieOnService = function (movieId) {
                return this.movieResource.get({ id: movieId });
            };
            MovieService.prototype.saveMovie = function (movie) {
                return this.movieResource.save(movie).$promise;
            };
            MovieService.prototype.deleteMovie = function (id) {
                return this.movieResource.delete({ id: id }).$promise;
            };
            MovieService.prototype.saveComment = function (movieId, comment) {
                return this.movieResource.saveComment({ movieId: movieId }, comment).$promise;
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('imdbclone').service('movieService', MovieService);
    })(Services = imdbclone.Services || (imdbclone.Services = {}));
})(imdbclone || (imdbclone = {}));
