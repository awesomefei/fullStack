namespace imdbclone.Controllers{
    export class MovieDetailsController{
        public message='hello from MovieDetailsController';
        public comment = {};
        private movieId;
        public movieTag;
        public tagContents;
        //public celebs ;

        constructor(
            private movieService: imdbclone.Services.MovieService,
            private tagService:imdbclone.Services.TagService,
            private $uibModal: ng.ui.bootstrap.IModalService,
            private $stateParams:ng.ui.IStateParamsService

        ){
            this.movieId = this.$stateParams['id'];
            this.getMovie();
            //this.celebs = this.getCelebs();


        }
        getTagContents(){
            this.tagContents = this.tagService.getTagContentsOnservice();
        }
        getTagDetails(id){
            //console.log('!!!!!!!!!!!!!!!!');
            this.$uibModal.open({
                templateUrl:'/ngApp/views/tagDetails.html',
                controller:imdbclone.Controllers.TagDetailsController,
                controllerAs:'vm',
                resolve:{
                    tagId: () => id,
                },
                size: 'ml'

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
