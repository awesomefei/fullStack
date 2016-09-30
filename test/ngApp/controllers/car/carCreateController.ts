namespace test.Controllers {

    export class CarCreateController {
        public car:any = {
            imageUrl: 'http://www.palauoek.com/wp-content/uploads/2014/07/profile-default-male.png'
        }; // field that will contain the movie information that will be created
        public file;

        constructor(
            private carService: test.Services.ICarService,
            private $state: ng.ui.IStateService,
            private filepickerService,
            private $scope: ng.IScope){

        }

        public pickFile(){
            this.filepickerService.pick({
                mimetype: 'image/*',
            }, this.fileUploaded.bind(this));
        }

        private fileUploaded(file){

            this.file = file;
            this.car.imageUrl = file.url;
            this.$scope.$apply(); // forces the page to update
        }


        saveCar(){
            this.carService.saveCar(this.car)
                .then(()=>{
                    this.$state.go('car');
                })
                .catch(()=>{
                    console.log('something went wrong...');
                });
        }

    }

}
