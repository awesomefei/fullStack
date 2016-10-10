namespace individualProject.Controllers{
    export class MenueController{
        public message="Hello from menuController";
        public menues = [];

        constructor(
            private $state:ng.ui.IStateService,
            private $uibModal: ng.ui.bootstrap.IModalService,
            private menueService:individualProject.Services.MenueService,
            //private orderService: individualProject.Services.CartService
        ){
            this.getMenues();
            }

        addFoodToCart(){

        }

        getMenues(){
            this.menueService.getMenuesOnServiceSide()
            .then((menueArr) =>{
                let i;
                let k;
                let cols =4;
                for(i = 0, k = -1; i < menueArr.length; i++){
                    if(i % cols == 0){
                        k++;
                        this.menues[k] = [];
                    }
                    this.menues[k].push(menueArr[i]);
                }
                console.log(this.menues);
            });

            //this.menues = this.menueService.getMenuesOnServiceSide();
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

        getMenueDetails(id){
            this.$uibModal.open({
                templateUrl:'/ngApp/views/menueDetail.html',
                controller:individualProject.Controllers.MenueDetailController,
                controllerAs:'controller',
                resolve:{
                    customerId:()=>{
                        return id;

                    }
                },
                size:'sm'
            });
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
