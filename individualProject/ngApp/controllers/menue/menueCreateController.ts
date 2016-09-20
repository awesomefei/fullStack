namespace individualProject.Controllers{
    export class MenueCreateController{
        public menue;
        constructor(
            private menueService:individualProject.Services.IMenueService,
            private $state: ng.ui.IStateService
        ){

        }
        saveMenue(){
            this.menueService.saveMenueOnServiceSide(this.menue)
            .then(()=>{

            })
            .catch(()=>{
                console.log('something went wrong from MenueCreateController.saveMenue')
            });
        }
    }
}
