namespace imdbclone.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public girlMovie;
        constructor(
            private homeMovieService:imdbclone.Services.HomeMovieService
        ){
            this.getGrilMovie();
        }
         getGrilMovie(){
             this.girlMovie = this.homeMovieService.getHomeMovieOnService('57f153a0c368641b139562be');
         }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
