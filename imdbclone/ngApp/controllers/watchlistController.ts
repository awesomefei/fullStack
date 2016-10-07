namespace imdbclone.Controllers{
    export class WatchListController{
        public message = 'Hello from the watchlist Controllers';
        public movies;
        constructor(
            private movieService:imdbclone.Services.MovieService,
            private $state:ng.ui.IStateService
        ){
            this.getMovies();
        }

        getMovies(){
            this.movies=this.movieService.getWatchlistOnservice()
            .then((movies) =>{
                this.movies = movies;
            })
            .catch(() =>{
                this.$state.go('login');
            });
        }

    }
}
