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
            return this.loginService.isAdmin() == 'true';
        }
        getDrinks(){
            this.drinks = this.drinkService.getDrinksOnService();
        }


        tryAddDrink(){
            let modal:any = this.$uibModal;
            modal.open({
                templateUrl:'/ngApp/views/drinkButton/addDrink.html',
                controller:individualProject.Controllers.AddDrinkController,
                controllerAs:'vm',
                size:'ml'
            });
            modal.result.then(function(){
                console.log('then')
            }).catch(function(){
                console.log('catch')
            }).finally(function(){
                console.log('finally')
            });

        }

        tryEditDrink(){
            this.$uibModal.open({
                templateUrl:'/ngApp/views/drinkButton/editDrink.html',
                controller:individualProject.Controllers.EditDrinkController,
                controllerAs:'vm',
                size:'ml'
            })
        }


    }
}
