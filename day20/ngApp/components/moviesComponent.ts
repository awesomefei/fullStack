namespace day20.Components{
    angular.module('day20').component('movies', {
        templateUrl:'/ngApp/views/movies.html',
        controller:day20.Controllers.MoviesController,
        controllerAs:'vm'
    });
}
