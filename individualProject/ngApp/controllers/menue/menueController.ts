namespace individualProject.Controllers{
    export class MenueController{
        public message="Hello from menuController";
        public menues;

        constructor(
            private $state:ng.ui.IStateService,
            private menueService:individualProject.Services.MenueService){
            this.getMenues();
            }

        getMenues(){
            this.menues = this.menueService.getMenuesOnServiceSide();
        }

        goToEiditPage(menueId){
            this.$state.go('MenueEdit', {id:menueId});
        }

        deleteMenue(menueId){
            this.menueService.deleteMenueOnServerSide(menueId)
            .then(()=>{
                this.getMenues();

            })
            .catch(()=>{
                console.log("something went wrong...")

            })


        }

    }


    export class MenueEditController{
        public menueToEdit={};
        constructor(
            private $state:ng.ui.IStateService,
            private $stateParams:ng.ui.IStateParamsService,
            private menueService:individualProject.Services.MenueService

        ){
            let menueId = this.$stateParams['id'];
            this.menueToEdit = this.menueService.getMenueOnServiceSide;

        }

        saveMenue(){
            this.menueService.saveMenueOnServiceSide(this.menueToEdit)
            .then(()=>{
                this.$state.go('menue');
            })
            .catch(()=>{
                console.log('something went wrong in saveMenue')
            });
        }
    }
}
