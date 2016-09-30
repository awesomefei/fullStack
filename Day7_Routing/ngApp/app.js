var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui.router'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/views/home.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/views/about.html',
            controller: 'aboutController',
            controllerAs: 'vm'
        })
            .state('product', {
            url: '/product',
            templateUrl: '/views/product.html',
            controller: MyApp.Controllers.ProductController,
            controllerAs: 'vm'
        })
            .state('productDetails', {
            url: '/product/:id',
            templateUrl: '/views/productDetails.html',
            controller: MyApp.Controllers.ProductDetailsController,
            controllerAs: 'vm'
        });
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
