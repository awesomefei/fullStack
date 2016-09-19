namespace cardealership.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public carMakes;
        public cars;

        constructor(
            private $uibModal: ng.ui.bootstrap.IModalService,
            private carService:cardealership.Services.ICarService,
        ){
            this.cars = carService.getCarsOnService();
            this.carMakes = carService.getCarMakesOnService();
        }

        getCarDetails(id){
            this.$uibModal.open({
                templateUrl:'/ngApp/views/carDetails.html',
                controller:cardealership.Controllers.CarDetailsController,
                controllerAs:'carDetailsController',
                resolve:{
                    carId : ()=>id,
                },
                size:'sm'
            })
        }

    }





    export class AboutController {
        public message = 'Hello from the about page!';
    }



}
