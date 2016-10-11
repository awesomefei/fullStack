namespace individualProject.Services{

    export interface IMenueService{
        getMenuesOnServiceSide();
        getMenueOnServiceSide(menueId);
        saveMenueOnServiceSide(menueToSave);
        deleteMenueOnServerSide(menueId);
        getContriesOnServiceSide();
    }


    export  class MenueService implements IMenueService{
        private menueResource;
        private contriesResource;
        constructor(private $resource:ng.resource.IResourceService){

            this.menueResource = $resource('/api/foods/:id',null, {
                saveFood:{
                    method:'POST',
                    url:'/api/orders/addfood/:foodId'
                }
            });
            this.contriesResource = $resource('/api/countries/:id');
        }
        saveFoodOnServiceSide(foodId){
            return this.menueResource.saveFood({foodId:foodId}, null)
        }
        //read
        getMenuesOnServiceSide(){
            return this.menueResource.query().$promise;
        }
        //update - use create method
        getMenueOnServiceSide(menueId){
            return this.menueResource.get({id:menueId}).$promise;
        }
        //create
        saveMenueOnServiceSide(menueToSave){
            return this.menueResource.save(menueToSave).$promise;
        }
        //delete
        deleteMenueOnServerSide(menueId){
            return this.menueResource.delete({id:menueId}).$promise;
        }

        getContriesOnServiceSide(){
            return this.contriesResource.query();
        }

    }
    angular.module('individualProject').service('menueService', MenueService);
}
