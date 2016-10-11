namespace individualProject.Controllers{
    export class CartController{
        public message = 'Let us see what in your cart';
        public orders;
        public order;
        public sum = 0;
        constructor(
            private cartService:individualProject.Services.CartService,
            private $state: ng.ui.IStateService,
            private $scope:ng.IScope

        ){
            this.getOrders();

        }
        clearOrder(){
            console.log('!!!!!!!!!! cart controler active @@@@@@@@');

            this.cartService.clearOrderOnService(this.orders)

            .then(() =>{
            console.log('!!!!!!!!!! cart controler then active @@@@@@@@');

            this.getOrders();
            this.sum = 0;
            //this.$scope.$apply();

            })
        }

        getSum(foods:any){
            for(let i = 0; i < foods.length; i++){
                this.sum += foods[i].price;
            }

        }
        getOrders(){
            this.cartService.getOrdersOnService()
            .then((orders) =>{
                console.log(orders.foods);
                this.getSum(orders.foods);
                this.orders = orders;
            })
            .catch(() =>{
                this.$state.go('login');
            })
        }

        getOrder(){
            this.order = this.cartService.getOrderOnService
        }

    }
}
