namespace individualProject.Controllers{
    export class DeleteDrinkController{
        public drink;
        private drinkId;
        public message = 'Hello from delete drink modal';

        constructor(
            private drinkService : individualProject.Services.DrinkService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,

        ){

            //this.getDrink();
        }
        getDrink(){
            this.drink = this.drinkService.getDrinkOnservice(this.drinkId);
        }
        deleteDrink(){
            this.drinkService.deletDrinkOnService(this.drink._id)
            .then(()=>{
                this.$uibModalInstance.close();
            })
        }

    }

}
