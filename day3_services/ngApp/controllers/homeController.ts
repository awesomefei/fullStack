namespace App.Controllers{

  class HomeController{
    public message = "Hello from HomeController";
    public products;

    constructor(private productService:App.Services.ProductService){
      this.products = this.getProducts();
    }
    getProducts(){
      return this.productService.getProducts();

    }
  }


  angular.module('CoolDesk').controller('homeController', HomeController)
}
