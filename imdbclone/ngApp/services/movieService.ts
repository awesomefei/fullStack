namespace imdbclone.Services{
    export class MovieService{
        private movieResource;

        constructor(
            $resource:ng.resource.IResourceService
        ){
            this.movieResource = $resource('/api/movies/:id', null, {
                saveComment:{
                    method: 'POST',
                    url:'/api/movies/comments/:movieId'
                },
                //  getCelebs:{
                //      method:'GET',
                //      url:'/api/celebs/:movieId'
                //  }
            });
        }
        //getCelebsOnService(){
            //return this. movieResource.getCelebs().$promise;
         //}
        getMoviesOnService(){
            return this.movieResource.query();
        }
        getMovieOnService(movieId){
            return this.movieResource.get({id:movieId});
        }

        saveMovie(movie){
            return this.movieResource.save(movie).$promise;
        }
        deleteMovie(id){
            return this.movieResource.delete({id:id}).$promise;
        }

        saveComment(movieId, comment){
            return this.movieResource.saveComment({movieId : movieId}, comment).$promise;
        }
    }
    angular.module('imdbclone').service('movieService', MovieService);
}
