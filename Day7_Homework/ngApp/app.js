var App;
(function (App) {
    angular.module('MyApp', ['ui.router'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/views/home.html',
            controller: App.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/views/about.html',
            controller: App.Controllers.AboutController,
            controllerAs: 'vm'
        })
            .state('diary', {
            url: '/diary',
            templateUrl: '/views/diary.html',
            controller: App.Controllers.DiaryController,
            controllerAs: 'vm'
        })
            .state('detail', {
            url: '/detail/:id',
            templateUrl: '/views/detail.html',
            controller: App.Controllers.DiaryDetailsController,
            controllerAs: 'vm'
        });
        $locationProvider.html5Mode(true);
    });
})(App || (App = {}));
