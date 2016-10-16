namespace imdbclone.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public girlMovie;
        public homeMovies;
        public twitters;
        constructor(
            private homeMovieService:imdbclone.Services.HomeMovieService,
        ){
            this.getGirlMovie();
            this.getHomeMovies();
            this.getTwitters();
        }
        getTwitters(){
            this.twitters = this.homeMovieService.getTwitterOnService();
        }
        getHomeMovies(){
            console.log('before');
            this.homeMovies = this.homeMovieService.getHomeMoviesOnService();
            console.log('after')
        }
         getGirlMovie(){
             this.girlMovie = this.homeMovieService.getHomeMovieOnService('57f153a0c368641b139562be');
         }
    }
    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
