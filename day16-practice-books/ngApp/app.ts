namespace day16_practice_books {

    angular.module('day16_practice_books', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: day16_practice_books.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: day16_practice_books.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('books', {
                url: '/book',
                templateUrl: '/ngApp/views/book.html',
                controller: day16_practice_books.Controllers.BookController,
                controllerAs: 'vm'
            })
            .state('bookDetails', {
                url: '/book/:id',
                templateUrl: '/ngApp/views/bookDetails.html',
                controller: day16_practice_books.Controllers.BookDetailsController,
                controllerAs: 'vm'
            })
            .state('addAuthorToBook', {
                url: '/addAuthorToBook/:id',
                templateUrl: '/ngApp/views/addAuthorToBook.html',
                controller: day16_practice_books.Controllers.BookAddAuthorController,
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
