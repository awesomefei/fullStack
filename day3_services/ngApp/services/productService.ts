namespace App.Services{
  export class ProductService{

    getProducts(){
      return [

          {name :' Laptop', price: 199.99},
          {name :' Milk', price: 9.99},
          {name :' Coffee', price: 5.99},

      ];
    }
  }
  angular.module('CoolDesk').service('productService',ProductService)
}
