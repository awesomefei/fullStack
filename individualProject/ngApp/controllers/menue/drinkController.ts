namespace individualProject.Controllers{
    export class DrinkController{
        public message = 'BACK TO ALL MENUS';
        public drinks;
        private drinkId;

        constructor(
            private drinkService:individualProject.Services.DrinkService,
            private $uibModal:ng.ui.bootstrap.IModalService,
            private loginService:individualProject.Services.LoginService,
        ){
            this.getDrinks();
        }
        isAdmin(){
            console.log('@@@@@@@@@@@@@@@@@@ controller @@@@@@@@@@@ isAdmin' )

            return this.loginService.isAdmin();
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
                size:'ml'
            })
            
        }


    }
}
