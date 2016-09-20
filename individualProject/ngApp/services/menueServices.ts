namespace individualProject.Services{

    export interface IMenueService{
        getMenuesOnServiceSide();
        getMenueOnServiceSide(menueId);
        saveMenueOnServiceSide(menueToSave);
        deleteMenueOnServerSide(menueId);
    }


    export  class MenueService implements IMenueService{
        private menueResource;
        constructor(private $resource:ng.resource.IResourceService){
            this.menueResource = $resource('/api/movies/:id');
        }
        //read
        getMenuesOnServiceSide(){
            return this.menueResource.query();
        }
        //update - use create method
        getMenueOnServiceSide(menueId){
            return this.menueResource.get({id:menueId});
        }
        //create
        saveMenueOnServiceSide(menueToSave){
            return this.menueResource.save(menueToSave).$promise;
        }
        //delete
        deleteMenueOnServerSide(menueId){
            return this.menueResource.delete({id:menueId}).$promise;
        }

    }
    angular.module('day8_homework').service('menueService', MenueService);
}
