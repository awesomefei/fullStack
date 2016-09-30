namespace test.Services {

    export interface ICarService {
        saveCar(car);
        getCars();
        getCar(id);
        deleteCar(id);
        getMakes();
    }


    // Movie Service that will connect to /api/movies/:id
    export class CarService implements ICarService{
        // fields
        private carResource;
        private carmakeResource;
        constructor($resource:ng.resource.IResourceService){
            // assign $resource object that connects to /api/movies/:id to movieResource
            this.carResource = $resource('/api/cars/:id');
            this.carmakeResource = $resource('/api/makes/');
        }

        // CRUD: Create
        saveCar(car){
            return this.carResource.save(car).$promise;
        }

        // CRUD: Read
        getCars(){ // get all movies
            debugger;
            return this.carResource.query();
        }
        getMakes(){
            return this.carmakeResource.query();
        }

        getCar(id){ // get movie by movie's id
            return this.carResource.get({id: id});
        }
        // CRUD: Update
        // -- use Create method

        // CRUD: Delete
        deleteCar(id){ // delete movie by movie's id
            return this.carResource.delete({id: id}).$promise;
        }
    }
    angular.module('test').service('carService', CarService);
}
