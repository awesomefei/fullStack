namespace day8_resource.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('day8_resource').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('day8_resource').service('myService', MyService);
    }
