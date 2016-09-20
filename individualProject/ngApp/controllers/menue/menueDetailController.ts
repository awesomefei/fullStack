namespace individualProject.Controllers{

    export class MenueDetailController{
        public MenueToCreat = {};
        constructor(
            private $state:ng.ui.IStateService,
            private menueService:individualProject.Services.MenueService
        ){

        }
        saveMenue(){
            this.menueService.saveMenueOnServiceSide(this.MenueToCreat)
            .then(() =>{
                this.$state.go('menue');
            })
            .catch(() =>{
                console.log('something went wrong in saveMenue')
            });
        }
    }

}
