namespace day22_passport {

    angular.module('day22_passport', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        $httpProvider:ng.IHttpProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: day22_passport.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: day22_passport.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('login', {
                url:'/login',
                templateUrl:'/ngApp/views/login.html',
                controller:day22_passport.Controllers.LoginController,
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

        //inject interceptor
        $httpProvider.interceptors.push('BearerAuthInterceptor');
    });

}

angular
    .module('day22_passport')
    .factory('BearerAuthInterceptor', function($window:ng.IWindowService, $q:ng.IQService){
        return{
                request: function(config){
                    //|| means if not, than make a new object assigned to config.headers
                    config.headers = config.headers || {};
                    if($window.localStorage.getItem('token')){
                        config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');

                    }
                    return config || $q.when(config);
                },
                response:function(response){
                    if(response.state === 401){
                        //optional field
                        //for example, you can make it so that it goes to the login state if unauthorizd

                    }
                    return response || $q.when(response);


                }
        };

});
