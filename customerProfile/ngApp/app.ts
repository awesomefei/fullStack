namespace day12_homework {

    angular.module('day12_homework', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: day12_homework.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: day12_homework.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('customerCreate', {
                url:'/save',
                templateUrl:'/ngApp/views/save.html',
                controller: day12_homework.Controllers.CustomerCreateController,
                controllerAs: 'controller'
            })
            .state('customerDetail', {
                url:'/detail',
                templateUrl:'/ngApp/views/detail.html',
                controller: day12_homework.Controllers.HomeController,
                controllerAs: 'controller'
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
