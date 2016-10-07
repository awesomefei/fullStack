var imdbclone;
(function (imdbclone) {
    angular.module('imdbclone', ['ui.router', 'ngResource', 'ui.bootstrap', 'youtube-embed']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: imdbclone.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('movies', {
            url: '/movies',
            templateUrl: '/ngApp/views/movies.html',
            controller: imdbclone.Controllers.MovieController,
            controllerAs: 'vm'
        })
            .state('movieDetails', {
            url: '/movies/:id',
            templateUrl: '/ngApp/views/movieDetails.html',
            controller: imdbclone.Controllers.MovieDetailsController,
            controllerAs: 'vm'
        })
            .state('celebs', {
            url: '/celebs',
            templateUrl: '/ngApp/views/celebs.html',
            controller: imdbclone.Controllers.CelebsController,
            controllerAs: 'vm'
        })
            .state('celebDetails', {
            url: '/celebs/:id',
            templateUrl: '/ngApp/views/celebDetails.html',
            controller: imdbclone.Controllers.CelebsController,
            controllerAs: 'vm'
        })
            .state('watchlist', {
            url: '/watchlist',
            templateUrl: '/ngApp/views/watchlist.html',
            controller: imdbclone.Controllers.WatchListController,
            controllerAs: 'vm'
        })
            .state('login', {
            url: '/login',
            templateUrl: '/ngApp/views/login.html',
            controller: imdbclone.Controllers.LoginController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(imdbclone || (imdbclone = {}));
angular
    .module('imdbclone')
    .factory('BearerAuthInterceptor', function ($window, $q) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.localStorage.getItem('token')) {
                config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
            }
            return config || $q.when(config);
        },
        response: function (response) {
            if (response.state === 401) {
            }
            return response || $q.when(response);
        }
    };
});
