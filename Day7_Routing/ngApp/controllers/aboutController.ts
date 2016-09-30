namespace MyApp.controller{
  export class AboutController{
    public message = "Hello from the AboutController";
  }
  angular.module("MyApp").controller('aboutController', AboutController);
}
