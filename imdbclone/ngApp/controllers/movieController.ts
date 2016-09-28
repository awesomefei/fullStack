namespace imdbclone.Controllers{
    export class MovieController{
        public message = 'Hello from the movie page!';
        public movies;

        constructor(
            private movieService: imdbclone.Services.MovieService,

        ){
            this.getMovies();
        }
        getMovies(){
            this.movies = this.movieService.getMoviesOnService();
        }

    }
}
