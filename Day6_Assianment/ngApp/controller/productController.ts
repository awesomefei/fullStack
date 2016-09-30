namespace App.Controllers{
  class Product{
    constructor(public name, public price){

    }
  }

class ProductController{
  public message = "it's working";
  public products;
  public product;
  constructor(){
    this.products = this.getProducts();
  }

  getProducts(){
    return [
      { name: "Milk", price: "2.3" },
    ];
  }

  saveProduct(){
    var productToSave = new Product(this.product.name, this.product.price);
    this.products.push(productToSave);
  }


}


  angular.module("homeApp").controller('productController',ProductController );
}
