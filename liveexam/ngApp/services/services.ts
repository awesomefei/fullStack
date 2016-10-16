namespace liveexam.Services {
    export class CarService{
        private carResource;
        constructor(
            private $resource:ng.resource.IResourceService
        ){
            this.carResource = this.$resource('/api/cars');
        }
        getCarsOnService(){
            return this.carResource.query();
        }
    }
    angular.module('liveexam').service('carService', CarService);
    }
