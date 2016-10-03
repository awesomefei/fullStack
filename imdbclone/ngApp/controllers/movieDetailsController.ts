namespace imdbclone.Controllers{
    export class MovieDetailsController{
        public message='hello from MovieDetailsController';
        public movie;
        public comment = {};
        private movieId;

        //public celebs ;

        constructor(
            private movieService: imdbclone.Services.MovieService,
            private $stateParams:ng.ui.IStateParamsService

        ){
            this.movieId = this.$stateParams['id'];
            this.getMovie();
            //this.celebs = this.getCelebs();


        }

        // getCommentCount(){
        //     console.log('_________________');
        //     return this.movieService.getCommentCountOnServiece(this.movieId);
        // }
        // getCelebs(){
        //     this.movieService.getCelebsOnService();
        // }
        getMovie(){
            this.movie = this.movieService.getMovieOnService(this.movieId);
        };

        saveComment(){
            this.movieService.saveComment(this.movieId,this.comment)
            .then(() =>{
                this.getMovie();
            })
            .then(()=>{
                this.comment = '';
            })
        };

    }
}
