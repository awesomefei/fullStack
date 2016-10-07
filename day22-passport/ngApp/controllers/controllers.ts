namespace day22_passport.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;
         constructor(private movieService:day22_passport.Services.MovieService,
                    private $state: ng.ui.IStateService){
                    this.getMovies()
         }
         getMovies(){
             this.movies = this. movieService.getMovies()
             .then((movies) =>{
                 this.movies = movies;
             })
             .catch(() =>{
                 this.$state.go('login');
             })
         }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
