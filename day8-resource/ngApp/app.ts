namespace day8_resource {

    angular.module('day8_resource', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: day8_resource.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: day8_resource.Controllers.AboutController,
                controllerAs: 'controller'
            })

            .state('movie',{
              url:'/movie',
              templateUrl:'/ngApp/views/movie.html',
              controller:day8_resource.Controllers.MovieController,
              controllerAs:'controller'

            })

            .state('moveDetials',{
              url:'/movie/:id',
              templateUrl:'/ngApp/views/movieDetails.html',
              controller:day8_resource.Controllers.MovieDetailController,
              controllerAs:'controller'
            })
            .state('movieCreate', {
              url:'/movieCreate',
              templateUrl:'/ngApp/views/movieCreate.html',
              controller:day8_resource.Controllers.MovieCreateController,
              controllerAs:'controller'
            })

            .state('moveEdit', {
                url:"/moveEdit/:id",
                templateUrl:'/ngApp/views/moveEdit.html',
                controller:day8_resource.Controllers.MoveEditController,
                controllerAs:'controller'
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
