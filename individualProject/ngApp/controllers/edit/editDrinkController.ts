namespace individualProject.Controllers{
    export class EditDrinkController{
        public drink;
        private drinkId;
        public message = 'Hello from edit drink modal';

        constructor(
            private drinkService : individualProject.Services.DrinkService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,

        ){

            //this.getDrink();
        }
        getDrink(){
            this.drink = this.drinkService.getDrinkOnservice(this.drinkId);
        }
        editDrink(){
            this.drinkService.editDrinkOnService(this.drink)
            .then(() =>{
                console.log('!!!!!!!!!!!!!!!????????????? go  drink state');
                this.$uibModalInstance.close("closed");
            })
            .catch(() =>{
                alert('something went wrong in editDrink');
            })

        }
    }

}
