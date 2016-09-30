namespace test {

    angular.module('test', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: test.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: test.Controllers.AboutController,
                controllerAs: 'controller'
            })

            .state('car', {
                url: '/car',
                templateUrl: '/ngApp/views/car.html',
                controller: test.Controllers.CarController,
                controllerAs: 'vm'
            })
            .state('carCreate', {
                url: '/car/create',
                templateUrl: '/ngApp/views/carCreate.html',
                controller: test.Controllers.CarCreateController,
                controllerAs: 'vm'
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
