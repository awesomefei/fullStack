var individualProject;
(function (individualProject) {
    angular.module('individualProject', ['ui.router', 'ngResource',
        'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
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
            url: '/menue',
            templateUrl: '/ngApp/views/menue.html',
            controller: individualProject.Controllers.MenueController,
            controllerAs: 'vm'
        })
            .state('menueCreate', {
            url: '/create',
            templateUrl: '/ngApp/views/menueCreate.html',
            controller: individualProject.Controllers.MenueCreateController,
            controllerAs: 'vm'
        })
            .state('drink', {
            url: '/drink',
            templateUrl: '/ngApp/views/drink.html',
            controller: individualProject.Controllers.DrinkController,
            controllerAs: 'vm'
        })
            .state('contact', {
            url: '/contact',
            templateUrl: '/ngApp/views/contact.html',
            controller: individualProject.Controllers.MenueContactController,
            controllerAs: 'vm'
        })
            .state('cart', {
            url: '/cart',
            templateUrl: '/ngApp/views/cart.html',
            controller: individualProject.Controllers.CartController,
            controllerAs: 'vm'
        })
            .state('login', {
            url: '/login',
            templateUrl: '/ngApp/views/login.html',
            controller: individualProject.Controllers.LoginController,
            controllerAs: 'vm'
        })
            .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: individualProject.Controllers.RegisterController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('BearerAuthInterceptor');
    });
})(individualProject || (individualProject = {}));
angular.module('individualProject')
    .factory('BearerAuthInterceptor', function ($window, $q) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.localStorage.getItem('token')) {
                config.headers.Authorization = 'Bearer ' +
                    $window.localStorage.getItem('token');
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
