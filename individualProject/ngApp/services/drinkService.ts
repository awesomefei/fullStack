namespace individualProject.Services{
    export class DrinkService{
        private drinkResource;
        constructor(
            private $resource:ng.resource.IResourceService
        ){
            this.drinkResource = this.$resource('/api/drinks:id');
        }
        getDrinksOnService(){
            return this.drinkResource.query();
        }

        getDrinkOnservice(id){
            return this.drinkResource.get({id:id});
        }

        saveDrinkOnService(drink){
            return this.drinkResource.save(drink).$promise;
        }
        deletDrinkOnService(id){
            return this.drinkResource.delete({id:id}).$promise;
        }
        editDrinkOnService(drink){
            return this.drinkResource.edit(drink).$promise;
        }
    }
    angular.module('individualProject').service('drinkService',DrinkService);
}
