namespace  day12_homework.Controllers{
    export class CustomerDetailController{
        public customer;
        public isEditMode;
        private hasBeenEdited;
        public customers;
            constructor(
                public customerId,
                private customerService: day12_homework.Services.ICustomerService,
                private $uibModalInstance:ng.ui.bootstrap.IModalServiceInstance,
                private $state:ng.ui.IStateService

            ){
                this.getCustomer();
                this.isEditMode = true;
            }



            closeModal(){
                this.$uibModalInstance.close({test:'test'});
            }

            toggleEditMode(){
                this.isEditMode = !this.isEditMode;
                console.log(this.isEditMode);
            }

            getCustomer(){
                 this.customerService.getCustomerOnService(this.customerId)
                 .then((data)=>{
                     this.customer = data;
                 });
            }
            getCustomers(){
                this.customers =this.customerService.getCustomersOnService();
            }

            saveCustomer(){
                this.customerService.saveCustomerOnService(this.customer)
                .then(()=>{
                        console.log('i will go to save in customnerDetailController');



                })
                .catch(()=>{
                    console.log('something went wrong in saveCustomer...');
                });
            }


            cancelSave(){
                this.getCustomers();
                this.toggleEditMode();
            }

    }

}
