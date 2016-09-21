namespace day12_homework.Services {
    export interface ICustomerService{
        getCustomerOnService(customerId);
        getCustomersOnService();
        saveCustomerOnService(customerToSave);
        deleteCustomerOnService(customerToDelete);
    }

    export class CusomerService implements ICustomerService{
        private customerResource;
         constructor(
             private $resource:ng.resource.IResourceService

         ){
             this.customerResource = $resource('/api/customers/:id');

         }
        getCustomerOnService(customerId){
            return this.customerResource.get({id:customerId});
        };
        getCustomersOnService(){
            return this.customerResource.query();
        };
        saveCustomerOnService(customerToSave){
            console.log("I am in save ");

            return this.customerResource.save(customerToSave).$promise;
        }
        deleteCustomerOnService(customerId){
            return this.customerResource.delete({id:customerId}).$promise;
        }
    }
    angular.module('day12_homework').service('customerService', CusomerService);
}
