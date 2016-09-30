namespace MyApp.Services{

    export class ProductService{

      private products = [
        {id:1, name: "Milk", price : 3.12},
        {id:2, name: "Eggs", price : 1.12},
        {id:3, name: "Icecream", price : 3.50},
      ];

      getProducts(){
        return this.products;

      }


      getProduct(id){
        let productToReturn;

        for(let p of this.products){
          if(p.id == id){
            return p;
          }
        }
      }


    }

    angular.module('MyApp').service('productService',ProductService);
}
