namespace day20.Controllers{
    export class MoviesController{
        public movies;
        constructor(
            private movieService:day20.Services.MovieService
        ){
            this.movies= this.movieService.getMoviesOnService();
        }
    }
}
