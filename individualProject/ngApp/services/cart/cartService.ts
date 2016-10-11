namespace individualProject.Services{
    export class CartService{

        private cartResource;
        constructor(
            private $resource:ng.resource.IResourceService
        ){
            this.cartResource = $resource('/api/orders')
        }
        getOrderOnService(){

        }

        getOrdersOnService(){
            return this.cartResource.get().$promise;
        }

        //addFoodOnService(food, )

    }
    angular.module('individualProject').service('cartService',CartService);
}
