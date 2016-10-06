var imdbclone;
(function (imdbclone) {
    var Services;
    (function (Services) {
        var LoginService = (function () {
            function LoginService($http, $window, $q) {
                this.$http = $http;
                this.$window = $window;
                this.$q = $q;
            }
            LoginService.prototype.isAdmin = function () {
                return this.$window.localStorage.getItem('admin');
            };
            LoginService.prototype.getUsername = function () {
                return this.$window.localStorage.getItem('username');
            };
            LoginService.prototype.login = function (loginInfo) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    _this.$http
                        .post('/api/users/login', loginInfo)
                        .then(function (data) {
                        console.log('data:' + data);
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
        angular.module('imdbclone').service('loginService', LoginService);
    })(Services = imdbclone.Services || (imdbclone.Services = {}));
})(imdbclone || (imdbclone = {}));
