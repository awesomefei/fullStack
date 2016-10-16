namespace imdbclone.Services{
    export class HomeMovieService{
        private homeMovieResource;
        private twiResource;
        constructor(
        $resource:ng.resource.IResourceService
    ){
        this.twiResource = $resource('/api/twitters');
        this.homeMovieResource = $resource('/api/homeMovies/:id', null, {
            saveComment:{
                method:'POST',
                url:'/api/homeMoves/comments/:homeMovieId'
            },
            saveDirector:{
                method: 'POST',
                url:'/api/homeMoves/direcor/:homeMovieId'
            },


        });
    }
    getTwitterOnService(){
        return this.twiResource.query();
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
