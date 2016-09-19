namespace cardealership {

    angular.module('cardealership', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: cardealership.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: cardealership.Controllers.AboutController,
                controllerAs: 'aboutController'
            })
            .state('search',{
                url:'/search',
                templateUrl:'ngApp/views/search.html',
                controller: cardealership.Controllers.HomeController,
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
