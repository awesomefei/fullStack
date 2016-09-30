namespace day14_db.Services{
    export class CarService{
        public carResource;
        constructor(
            private $resource:ng.resource.IResourceService
        ){
            this.carResource =  $resource('/api/cars/:id');
        }
        getCarsOnService(){
            return this.carResource.query();
        }
    }

    angular.module('day14_db').service('carService', CarService);
}
