namespace individualProject.Services{
    export class CartService{

        private cartResource;
        constructor(
            private $resource:ng.resource.IResourceService
        ){
            this.cartResource = $resource('/api/orders', null, {
                edit:{
                    method:'PUT',
                    url:'/api/orders'
                }

            })
        }



        getOrderOnService(){

        }

        getOrdersOnService(){
            return this.cartResource.get().$promise;
        }

        clearOrderOnService(orders){
            console.log('!!!!!!!!!! cart service active @@@@@@@@');

            return this.cartResource.edit(orders).$promise;
        }

        //addFoodOnService(food, )

    }
    angular.module('individualProject').service('cartService',CartService);
}
