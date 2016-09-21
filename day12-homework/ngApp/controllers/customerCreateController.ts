namespace day12_homework.Controllers{
    export class CustomerCreateController{
        public customerToCreate = {};
        constructor(
            private $state:ng.ui.IStateService,
            private customerService: day12_homework.Services.CusomerService
        ){

        }
        saveCustomer(){
            console.log('_________________');
            console.log(this.customerToCreate);
            this.customerService.saveCustomerOnService(this.customerToCreate)
            .then(()=>{
                console.log("I will go home");
                this.$state.go('home');
            })
            .catch(()=>{
                console.log("something went wrong in customerCreate")
            });
        }
    }
}
