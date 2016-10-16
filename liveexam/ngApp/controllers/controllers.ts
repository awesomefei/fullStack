namespace liveexam.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public cars;

        constructor(
            private carService:liveexam.Services.CarService
        ){
            this.getCars();
        }
        getCars(){
            this.cars = this.carService.getCarsOnService();
        }


    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
