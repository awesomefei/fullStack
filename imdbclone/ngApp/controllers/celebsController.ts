namespace imdbclone.Controllers{
    export class CelebsController{
        public celebs;
        public message = 'hello from CelebsController'

        constructor(
            private celebService:imdbclone.Services.CelebService

        ){
            this.getCelebs();
        }
        getCelebs(){
            this.celebs = this.celebService.getCelebsOnService();
        }
    }
}
