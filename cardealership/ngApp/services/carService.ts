namespace cardealership.Services{

    export interface ICarService{
        getCarsOnService();
        getCarOnService(carId);
        getCarMakesOnService();
    }

    export class CarService implements ICarService{
        private carResource;
        private carMakesResource;
        constructor(private $resource:ng.resource.IResourceService){
            //assign $resource object that connects to /api/cars/:id to carResource

            this.carResource = $resource('/api/cars/:id');
            this.carMakesResource=$resource('/api/makes');
        }
         getCarsOnService(){
            return this.carResource.query();
        }
         getCarOnService(carId){
            return this.carResource.get({id:carId});
        }
         getCarMakesOnService(){
            return this.carMakesResource.query();
        }
    }

    angular.module('cardealership').service('carService', CarService);
}
