namespace individualProject.Controllers{
    export class CartController{
        public message = 'hello from cart controller';
        public orders;

        constructor(
            private cartService:individualProject.Services.CartService,
            private $state: ng.ui.IStateService
        ){
            this.getOrders();
        }
        getOrders(){
            this.orders = this.cartService.getOrdersOnService()
            .then((orders) =>{
                this.orders = orders;
            })
            .catch(() =>{
                this.$state.go('login');
            })
        }
    }
}
