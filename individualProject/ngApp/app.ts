namespace individualProject {

    angular.module('individualProject', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: individualProject.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: individualProject.Controllers.AboutController,
                controllerAs: 'controller'
            })

            .state('menue', {
                url:'/menue',
                templateUrl:'/ngApp/views/menue.html',
                controller:individualProject.Controllers.MenueController,
                controllerAs:'vm'
            })

            .state('menueCreate', {
                url:'/meneu/create',
                templateUrl:'/ngApp/views/menueCreate.html',
                controller:individualProject.Controllers.MenueCreateController,
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
