namespace  day12_homework.Controllers{
    export class CustomerDetailController{
        public customer;
        public isEditMode;
        private hasBeenEdited
            constructor(
                public customerId,
                private customerService: day12_homework.Services.ICustomerService,
                private $uibModalInstance:ng.ui.bootstrap.IModalServiceInstance


            ){
                this.getCustomer();
                this.isEditMode = false;
            }



            closeModal(){
                this. $uibModalInstance.close();
            }

            toggleEditMode(){
                this.isEditMode = !this.isEditMode;
            }

            getCustomer(){
                this.customer = this.customerService.getCustomerOnService(this.customerId);
            }

            saveCustomer(){
                this.customerService.getCustomerOnService(this.customer)
                .then(()=>{
                    this.hasBeenEdited = true;
                    this.toggleEditMode();

                })
                .catch(()=>{
                    console.log('something went wrong in saveCustomer...');
                });
            }
            deleteCustomer(){
                    this.customerService.deleteCustomerOnService(this.customerId)
                    .then(()=>{
                        this.hasBeenEdited = true;
                        this.closeModal();
                    })

                    .catch(()=>{
                        console.log("something went wrong...")
                    })
            }

            cancelSave(){
                this.getCustomer();
                this.toggleEditMode();
            }

    }

}
