namespace day16_mongoose {

    angular.module('day16_mongoose', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: day16_mongoose.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: day16_mongoose.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('movies', {
                url:'/movie',
                templateUrl: '/ngApp/views/movie.html',
                controller: day16_mongoose.Controllers.MovieController,
                controllerAs:'vm'
            })
            .state('moviesDetail',{
                url:'/movie/:id',
                templateUrl:'/ngApp/views/movieDetails.html',
                controller: day16_mongoose.Controllers.MovieDetailsController,
                controllerAs:'vm'
            })
            .state('addActorToMovie',{
                url:'/addActorToMovie/:id',
                templateUrl:'/ngApp/views/addActorToMovie.html',
                controller:day16_mongoose.Controllers.MovieAddActorController,
                controllerAs:'vm'
            })



            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
