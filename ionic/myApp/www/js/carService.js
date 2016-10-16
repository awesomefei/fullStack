angular
    .module('starter.services')
    .service('carService', CarService);

function CarService($resource){
    //this means public, var self means private
    var self = this;

    var carResource = $resource('https://carsample.herokuapp.com/api/cars');

    self.getCars = function(){
        return carResource.query().$promise;
    }
}
