namespace day12_homework.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public customers;
        public customer;
        public customerToDelete = {};
        constructor(
            private $state:ng.ui.IStateService,
            private customerService:day12_homework.Services.ICustomerService,
            private $uibModal:ng.ui.bootstrap.IModalService

        ){
            this.getCustomers();

        }
        getCustomers(){
            this.customers =this.customerService.getCustomersOnService();
        }

        getCustomerDetails(id){
            this.$uibModal.open({
                templateUrl:'/ngApp/views/customerDetailShow.html',
                controller:day12_homework.Controllers.CustomerDetailController,
                controllerAs:'controller',
                resolve:{
                    customerId:()=>{
                        return id;

                    }
                },
                size:'sm'
            })
        }

        deleteCustomer(customerId){
            console.log(customerId);

            this.customerService.deleteCustomerOnService(customerId)
            .then(()=>{
                console.log('i will go to delete');
                this.getCustomers();
            })
            .catch(()=>{
                console.log("something wrong in customerDelete of controllers.ts")
            });
        }


    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
