namespace imdbclone.Controllers{
    export class CelebsController{
        public celebs;
        public celebMovies;
        public celebId;
        public tags;
        public message = 'hello from CelebsController'

        constructor(
            private celebService:imdbclone.Services.CelebService,
            private $stateParams: ng.ui.IStateParamsService
        ){
            this.getCelebs();
            this.celebId = this.$stateParams['id'];
            this.getceleb();
            console.log(this.celebMovies);
        }

        getCelebs(){
            this.celebs = this.celebService.getCelebsOnService();
        }
        getceleb(){
            this.celebMovies = this.celebService.getCelebOnService(this.celebId);
        }
        likeCeleb(){
            console.log(this.celebMovies.like);
            this.celebMovies.like++;
            this.celebService.editCelebOnService(this.celebMovies);
        }
        dislikeCeleb(){
            this.celebMovies.dislike++;
            this.celebService.editCelebOnService(this.celebMovies);
        }
    }
}
