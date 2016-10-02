namespace day20.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }


    export class AboutController {
        public message = 'Hello from the about page!';
        public movies;
        constructor(private movieService: day20.Services.MovieService){
            this.movies = this.movieService.getMoviesOnService();
        }
    }

}
