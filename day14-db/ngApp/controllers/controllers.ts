namespace day14_db.Controllers {

    export class HomeController {
        public cars;
        public message = 'Hello from the home page!';
        constructor(
            private  carService : day14_db.Services.CarService,

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
