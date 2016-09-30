namespace imdbclone.Controllers{
    export class CelebsController{
        public celebs;
        public celeb;
        public celebId;
        public message = 'hello from CelebsController'

        constructor(
            private celebService:imdbclone.Services.CelebService,
            private $stateParams: ng.ui.IStateParamsService
        ){
            this.getCelebs();
            this.celebId = this.$stateParams['id'];
            this.getceleb();
            console.log(this.celeb);
        }
        getCelebs(){
            this.celebs = this.celebService.getCelebsOnService();
        }
        getceleb(){
            this.celeb = this.celebService.getCelebOnService(this.celebId);
        }
        likeCeleb(){
            console.log(this.celeb.like);
            this.celeb.like++;
            this.celebService.editCelebOnService(this.celeb);
        }
        dislikeCeleb(){
            this.celeb.dislike++;
            this.celebService.editCelebOnService(this.celeb);
        }
    }
}
