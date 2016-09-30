namespace test.Controllers {

    export class CarController {
        // field that will contain all the movies
        public cars;
        public showCar;
        public makes;

        constructor(
            private carService: test.Services.ICarService,
            private $uibModal: ng.ui.bootstrap.IModalService){

            this.showCar = false;
            this.getCars();

        }
        getMakes(){
            this.makes = this.carService.getMakes();
        }
        getCars(){ // gets all movies
            // returns all the movies from the movieService >> getMovies();
            //this.movies = this.movieService.getMovies();


                this.cars = this.carService.getCars();
                this.showCar = true;


        }

        getCarDetails(id){
            this.$uibModal.open({
                templateUrl: '/ngApp/views/carDetails.html',
                controller: test.Controllers.CarDetailsController,
                controllerAs: 'vm',
                resolve: {
                    carId: ()=> id,
                },
                size: 'sm'
            }).result.then((data)=>{
                console.log(data.hasBeenEdited);
                if(data.hasBeenEdited == true){
                    this.getCars();
                }
            });
        }
    }

}
