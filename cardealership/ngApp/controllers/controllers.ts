namespace cardealership.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public carMakes;
        public cars;

        constructor(
            private carsService:cardealership.Services.ICarService,
            private $uibModal: ng.ui.bootstrap.IModalService) {
            //this.cars = carsService.getCarsOnService();
            //this.carMakes = carsService.getCarMakesOnService();
            }

        getCarDetials(id){
            this.$uibModal.open({
                templateUrl:'/ngApp/vires/carDetails.html',
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
