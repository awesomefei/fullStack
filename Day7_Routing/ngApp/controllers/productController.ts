namespace MyApp.Controllers{

  export class ProductController{
    public products;

    constructor(private productService:MyApp.Services.ProductService){
      this.products = this.productService.getProducts();

    }
  }

  
  export class ProductDetailsController{
    public product;

    constructor(
      private $stateParams:ng.ui.IStateParamsService,
      private productService:MyApp.Services.ProductService){

    let productId = this.$stateParams['id'];
    this.product = this.productService.getProduct(productId);

    }
  }
}
