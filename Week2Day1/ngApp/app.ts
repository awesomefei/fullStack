namespace App{

    angular.module('app', []);


    class Friend{
      public name;
      public age;
      constructor(name,age){
        this.name = name;
        this.age = age;
      }
    }

    class HomeController{
      public message = "Welcome";
      public friends;
      public friendToCreate

      constructor(){
        this.friends = this.getFriends();
      }
      getFriends(){
        //pretend this method will make an AJAX call to the server to get all the friends from the database
        let friends = [
          {name : "Kyle", age : 6},
          {name : "Cartman", age : 7},
          {name : "Kenny", age : 8},
          {name : "Timmy", age : 9},
        ];

        return friends;


      }
      saveFriend(){
        let friend = new Friend(this.friendToCreate.name, this.friendToCreate.age);
        this.friends.push(friend);
      }
    }

    angular.module('app').controller('homeController', HomeController);


}
