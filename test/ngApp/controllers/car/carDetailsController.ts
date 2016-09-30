namespace test.Controllers {

    export class CarDetailsController {
        public car;
        public isEditMode;
        private hasBeenEdited;

        constructor(
            public carId,
            private carService: test.Services.ICarService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance){

            this.isEditMode = false;
            this.hasBeenEdited = false;
            this.getCar();
        }

        closeModal(){
            this.$uibModalInstance.close({hasBeenEdited: this.hasBeenEdited});
        }

        toggleEditMode(){
            this.isEditMode = !this.isEditMode;
        }

        getCar(){
            this.car = this.carService.getCar(this.carId);
        }

        saveCar(){
            this.carService.saveCar(this.car)
                .then(()=>{
                    this.hasBeenEdited = true;
                    this.toggleEditMode();
                })
                .catch(()=>{
                    console.log("something went wrong...")
                });
        }

        deleteCar(){
            this.carService.deleteCar(this.carId)
                .then(()=>{
                    this.hasBeenEdited = true;
                    this.closeModal();
                })
                .catch(()=>{
                    console.log("something went wrong");
                });
        }

        cancelSave() {
            this.getCar();
            this.toggleEditMode();
        }

    }

}
