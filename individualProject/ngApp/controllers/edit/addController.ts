namespace individualProject.Controllers{
    export class AddDrinkController{
        public drink;
        public message = 'Hello from add drink modal';
        constructor(
            private drinkService : individualProject.Services.DrinkService,
        ){
            //this.getDrink();

        }
        // getDrink(){
        //     this.drink = this.drinkService.getDrinkOnservice(this.drinkId);
        // }
        addDrink(){
            this.drinkService.saveDrinkOnService(this.drink);
        }
    }
}
