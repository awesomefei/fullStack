namespace individualProject.Controllers{
    export class DrinkController{
        public message = 'BACK TO ALL MENUS';
        public drinks;
        private drinkId;

        constructor(
            private drinkService:individualProject.Services.DrinkService,
            private $uibModal:ng.ui.bootstrap.IModalService,

        ){
            this.getDrinks();
        }
        getDrinks(){
            this.drinks = this.drinkService.getDrinksOnService();
        }
        
        // editDrink(){
        //
        // }

        tryAddDrink(){
            this.$uibModal.open({
                templateUrl:'/ngApp/views/addDrink.html',
                controller:individualProject.Controllers.AddDrinkController,
                controllerAs:'vm',
                size:'sm'
            })
        }


    }
}
