namespace individualProject.Services{
    export class CartService{

        private cartResource;
        constructor(
            private $resource:ng.resource.IResourceService
        ){
            this.cartResource = $resource('/api/orders')
        }

        getOrdersOnService(){
            return this.cartResource.query().$promise;
        }

        //addFoodOnService(food, )

    }
    angular.module('individualProject').service('cartService',CartService);
}
