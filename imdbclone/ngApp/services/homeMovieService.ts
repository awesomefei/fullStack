namespace imdbclone.Services{
    export class HomeMovieService{
        private homeMovieResource;
        constructor(
        $resource:ng.resource.IResourceService
    ){
        this.homeMovieResource = $resource('/api/homeMovies/:id', null, {
            saveComment:{
                method:'POST',
                url:'/api/homeMoves/comments/:homeMovieId'
            },
            saveDirector:{
                method: 'POST',
                url:'/api/homeMoves/direcor/:homeMovieId'
            }
        });
    }
    getHomeMoviesOnService(){
        return this.homeMovieResource.query();
    }
    getHomeMovieOnService(movieId){
        return this.homeMovieResource.get({id:movieId})
    }
    saveHomeMovieOnService(homeMovie){
        return this.homeMovieResource.save(homeMovie).$promise;
    }
    deleteHomeMovie(id){
        return this.homeMovieResource.delete({id:id}).$promise;
    }

    saveComment(homeMovieId, comment){
        return this.homeMovieResource.saveComment({homeMovieId:homeMovieId}, comment).$promise;
    }
}

    angular.module('imdbclone').service('homeMovieService', HomeMovieService);
}
