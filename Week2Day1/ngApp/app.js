var App;
(function (App) {
    angular.module('app', []);
    var Friend = (function () {
        function Friend(name, age) {
            this.name = name;
            this.age = age;
        }
        return Friend;
    }());
    var HomeController = (function () {
        function HomeController() {
            this.message = "Welcome";
            this.friends = this.getFriends();
        }
        HomeController.prototype.getFriends = function () {
            var friends = [
                { name: "Kyle", age: 6 },
                { name: "Cartman", age: 7 },
                { name: "Kenny", age: 8 },
                { name: "Timmy", age: 9 },
            ];
            return friends;
        };
        HomeController.prototype.saveFriend = function () {
            var friend = new Friend(this.friendToCreate.name, this.friendToCreate.age);
            this.friends.push(friend);
        };
        return HomeController;
    }());
    angular.module('app').controller('homeController', HomeController);
})(App || (App = {}));
