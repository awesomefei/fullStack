namespace imdbclone.Controllers{
    export class MovieDetailsController{
        public message='hello from MovieDetailsController';
        public comment = {};
        private movieId;
        public movieTag;

        //public celebs ;

        constructor(
            private movieService: imdbclone.Services.MovieService,
            private $uibModal: ng.ui.bootstrap.IModalService,
            private $stateParams:ng.ui.IStateParamsService

        ){
            this.movieId = this.$stateParams['id'];
            this.getMovie();
            //this.celebs = this.getCelebs();


        }
        getTagDetails(id){
            this.$uibModal.open({
                templateUrl:'/ngApp/views/tagDetails.html',
                controller:imdbclone.Controllers.TagDetailsController,
                controllerAs:'vm',
                resolve:{
                    tagId: () => id,
                },
                size: 'sm'

            }).result.then((data) =>{
                console.log(data),
                this.get
            })
        }

        // getCommentCount(){
        //     console.log('_________________');
        //     return this.movieService.getCommentCountOnServiece(this.movieId);
        // }
        // getCelebs(){
        //     this.movieService.getCelebsOnService();
        // }
        getMovie(){
            this.movieTag = this.movieService.getMovieOnService(this.movieId);
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
