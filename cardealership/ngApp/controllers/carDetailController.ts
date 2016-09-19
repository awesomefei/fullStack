namespace cardealership.Controllers {

    export class CarDetailsController {
        public car;
        public isEditMode;
        //private hasBeenEdited;

        constructor(
            public carId,
            private carService: cardealership.Services.ICarService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance){

            this.isEditMode = false;
            //this.hasBeenEdited = false;
            this.getCar();
        }

        closeModal(){
           this.$uibModalInstance.close();
        }

        //toggleEditMode(){
        //    this.isEditMode = !this.isEditMode;
    //    }

        getCar(){
            this.car = this.carService.getCarOnService(this.carId);
        }

        //saveMovie(){
        //    this.movieService.saveMovie(this.movie)
        //        .then(()=>{
        //            this.hasBeenEdited = true;
        //            this.toggleEditMode();
        //        })
        //        .catch(()=>{
        //             console.log("something went wrong...")
        //         });
        // }
        //
        // deleteMovie(){
        //     this.movieService.deleteMovie(this.movieId)
        //         .then(()=>{
        //             this.hasBeenEdited = true;
        //             this.closeModal();
        //         })
        //         .catch(()=>{
        //             console.log("something went wrong");
        //         });
        // }
        //
        // cancelSave() {
        //     this.getMovie();
        //     this.toggleEditMode();
        // }

    }

}
