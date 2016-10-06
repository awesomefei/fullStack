namespace day22_passport.Services{
    export class MovieService{
        private movieResource;
        constructor($resource:ng.resource.IResourceService){
            this.movieResource = $resource('/api/movies/:id')
        }
        getMovies(){
            return this.movieResource.query().$promise;
        }
    }
    angular.module('day22_passport').service('movieService',MovieService);
}
