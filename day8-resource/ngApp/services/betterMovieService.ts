namespace day8_resource.Services {

  export class BetterMovieService{

    private MovieResource;

    constructor($resource:ng.resource.IResourceService){
      this.MovieResource = $resource('/api/movies/:id');
    }

    getMoviesOnServiceSide(){
      return this.MovieResource.query();
    }

    getMovie(movieiId){
      return this.MovieResource.get({id:movieiId});
    }
    saveMovieOnServiceSide(movieToSave){
      return this.MovieResource.save(movieToSave).$promise;
    }
    deleteMovieOnServiceSide(movieId){
      return this.MovieResource.delete({id:movieId}).$promise;
    }


  }

  angular.module('day8_resource').service('$movieService', BetterMovieService);
}
