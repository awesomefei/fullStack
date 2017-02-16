var individualProject;
(function (individualProject) {
    var Services;
    (function (Services) {
        var LoginService = (function () {
            function LoginService($http, $window, $q, $resource) {
                this.$http = $http;
                this.$window = $window;
                this.$q = $q;
                this.$resource = $resource;
                this.loginResource = $resource('/api/users/register');
            }
            LoginService.prototype.registerOnService = function (user) {
                console.log(user);
                return this.loginResource.save(user).$promise;
            };
            LoginService.prototype.isAdmin = function () {
                return this.$window.localStorage.getItem('admin');
            };
            LoginService.prototype.getUsername = function () {
                return this.$window.localStorage.getItem('username');
            };
            LoginService.prototype.login = function (loginInfo) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    console.log(loginInfo);
                    _this.$http
                        .post('/api/users/login', loginInfo)
                        .then(function (data) {
                        console.log("!!!!!!!!!!!!!loginService" +
                            data.data.username);
                        var token = data.data.token;
                        var admin = data.data.admin;
                        var username = data.data.username;
                        _this.$window.localStorage.setItem('token', token);
                        _this.$window.localStorage.setItem('username', username);
                        _this.$window.localStorage.setItem('admin', admin);
                        resolve();
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            };
            LoginService.prototype.logout = function () {
                this.$window.localStorage.setItem('token', null);
                this.$window.localStorage.setItem('username', null);
                this.$window.localStorage.setItem('admin', null);
                this.$window.localStorage.removeItem('token');
                this.$window.localStorage.removeItem('username');
                this.$window.localStorage.removeItem('admin');
            };
            return LoginService;
        }());
        Services.LoginService = LoginService;
        angular.module('individualProject').service('loginService', LoginService);
    })(Services = individualProject.Services || (individualProject.Services = {}));
})(individualProject || (individualProject = {}));
