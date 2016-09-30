namespace day8_resource.Controllers {

    export class MovieController {
      public movies;

      constructor(
          private $state:ng.ui.IStateService,
          private $movieService:day8_resource.Services.BetterMovieService){
          this.getMovies();

      }
      deleteMovie(movieId){
        this.$movieService.deleteMovieOnServiceSide(movieId)
        .then(() =>{
          this.getMovies();
        })
        .catch(() =>{
          console.log("something went wrong...")
        })
      }

      getMovies(){
        this.movies = this.$movieService.getMoviesOnServiceSide();
      }
      goToEditPage(movieId){
          this.$state.go('moveEdit',{id:movieId});
          
      }

    }

    export class MovieDetailController{
      public movie;
      constructor(
        private $stateParams:ng.ui.IStateParamsService,
        private $movieService:day8_resource.Services.BetterMovieService){
            //id
          let movieId= this.$stateParams['id'];
          this.movie = this.$movieService.getMovie(movieId);
        }

    }

    export class MovieCreateController{
      public movieToCreat = {};
      constructor(
        private $state:ng.ui.IStateService,
        private $movieService: day8_resource.Services.BetterMovieService){

      }
      saveMovie(){
        this.$movieService.saveMovieOnServiceSide(this.movieToCreat)
        .then(()=>{
          //this movie refers to App.ts.state named movie
          this.$state.go('movie');
        })
        .catch(()=>{
          console.log("something went wrong...")
        });
      }
    }
    export class MoveEditController{
        public movieToEdit ={};
        constructor(
          private $state:ng.ui.IStateService,
          private $stateParams:ng.ui.IStateParamsService,
          private $movieService: day8_resource.Services.BetterMovieService){
             let movieId = this.$stateParams['id'];
             this.movieToEdit = this.$movieService.getMovie(movieId);
        }
        saveMovie(){
          this.$movieService.saveMovieOnServiceSide(this.movieToEdit)
          .then(()=>{
            //this movie refers to App.ts.state named movie
            this.$state.go('movie');
          })
          .catch(()=>{
            console.log("something went wrong...")
          });
        }

    }



}
