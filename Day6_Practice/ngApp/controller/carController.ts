namespace App.Controllers{

  class Car{
    constructor(public year, public make, public model){

    }
  }
  class CarController{
    public message = "Welcome to CoderCaps Car Dearlership!!!";
    public cars;
    public car//public field that will contain information about the car to create

    constructor(){
      this.cars=this.getCars();
    }

    getCars(){
      return[
      { year: 1989, make: "VW", model: "Fox" },
      { year: 1988, make: "Nissan", model: "Sentra" },
      { year: 1996, make: "Ford", model: "Explorer" },
      { year: 2009, make: "BMW", model: "i325" },
      { year: 2016, make: "Tesla", model: "Model S" },
      ];
}
  saveCar(){
    var carToSave = new Car(this.car.year, this.car.make, this.car.model);
    this.cars.push(carToSave);
  }



  }
  angular.module('MyApp').controller('carController',CarController);
}
