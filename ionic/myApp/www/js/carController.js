angular.module('starter.controllers')
       .controller('carController', CarController);


function CarController(carService){
    //this == CarController
    var self = this;

    //public fileds
    self.message = ' List of Cars';
    self.cars;

    //code execution(kinda like inside of constructor)
    getCars();


    //private methods
    function getCars(){
        carService.getCars()
        .then(function(cars){
            self.cars = cars;
            console.log(cars);
        })
    }
}

// function CarController($scope){
//     $scope.message = ' List of Cars';
//     $scope.cars = [
//         {year: 2000, make : 'Honda', model:'CRV'},
//         {year: 2011, make : 'Honda', model:'CRV'},
//         {year: 2009, make : 'Honda', model:'CRV'},
//     ];
// }
