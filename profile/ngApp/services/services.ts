namespace home.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('home').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('home').service('myService', MyService);
    }
