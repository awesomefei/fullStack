namespace imdbclone.Controllers{
    export class MovieDetailsController{
        public message='hello from MovieDetailsController';
        public movie;
        public comment = {};
        private movieId;

        constructor(
            private movieService: imdbclone.Services.MovieService,
            private $stateParams:ng.ui.IStateParamsService

        ){
            this.movieId = this.$stateParams['id'];
            this.getMovie();
        }

        getMovie(){
            this.movie = this.movieService.getMovieOnService(this.movieId);
        };

        saveComment(){
            this.movieService.saveComment(this.movieId,this.comment)
            .then(() =>{
                this.getMovie();
            })
        };

    }
}
