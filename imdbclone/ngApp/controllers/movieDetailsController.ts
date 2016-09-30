namespace imdbclone.Controllers{
    export class MovieDetailsController{
        public message='hello from MovieDetailsController';
        public movie;
        public comment = {};
        private movieId;
        public commentCounter;

        constructor(
            private movieService: imdbclone.Services.MovieService,
            private $stateParams:ng.ui.IStateParamsService

        ){
            this.movieId = this.$stateParams['id'];
            this.getMovie();
            //this.getCommentCount();
        }
        
        // getCommentCount(){
        //     console.log('_________________');
        //     return this.movieService.getCommentCountOnServiece(this.movieId);
        // }

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
