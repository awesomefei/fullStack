namespace App.Food {
    class FoodController {
        food: any[];
        search: string;

        constructor() {
            this.food = [{name:'Milk', price: 2.33 },
                        {name:'Marzipan', price:99.88},
                        {name:'Mustard', price:6.77},
                        {name:'Eggs', price:3.44}]
        }
    }

    angular.module("MyApp").controller('FoodController', FoodController);
}
