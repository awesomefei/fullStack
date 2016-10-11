namespace individualProject.Controllers{
    export class CartController{
        public message = 'Let us see what in your cart';
        public orders;
        public order;
        public sum;
        constructor(
            private cartService:individualProject.Services.CartService,
            private $state: ng.ui.IStateService
        ){
            this.getOrders();

        }

        getSum(item){


        }
        getOrders(){
            this.cartService.getOrdersOnService()
            .then((orders) =>{
                console.log(orders);
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
