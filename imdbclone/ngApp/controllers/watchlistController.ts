namespace watchlist.Controllers{
    export class WatchListController{
        public message = 'Hello from the watchlist Controllers';
        public movies;
        constructor(
            private movieService:imdbclone.Services.MovieService,
            private $state:ng.ui.IStateService
        ){

        }
        getMovies(){
            this.movies=this.movieService.getMoviesOnService()
            .then((movies) =>{
                this.movies = movies;
            })
            .catch(() =>{
                this.$state.go('login');
            });
        }

    }
}
