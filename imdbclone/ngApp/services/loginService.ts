namespace imdbclone.Services{
    export class LoginService{
        private loginResource;
        constructor(
            private $http:ng.IHttpService,
            private $resource:ng.resource.IResourceService,
            private $window:ng.IWindowService,
            private $q: ng.IQService

        ){
            this.loginResource = $resource('/api/users/register');


        }
        registerOnService(user){
            console.log(user);
            return this.loginResource.save(user).$promise;
        }
        isAdmin(){
            return this.$window.localStorage.getItem('admin');

        }

        getUsername(){
            return this.$window.localStorage.getItem('username');
        }

        login(loginInfo){
            return this.$q((resolve, reject) =>{
                this.$http
                    .post('/api/users/login', loginInfo)
                    .then((data:any) =>{
                        console.log('data:' + data);
                        //extract token
                        let token = data.data.token;
                        let admin = data.data.admin;
                        let username = data.data.username;
                        this.$window.localStorage.setItem('token', token);
                        this.$window.localStorage.setItem('username', username);
                        this.$window.localStorage.setItem('admin', admin);

                        resolve();

                    })
                    .catch((err) =>{
                        reject(err);
                    });
            });

        }
        logout(){
            this.$window.localStorage.setItem('token', null);
            this.$window.localStorage.setItem('username', null);
            this.$window.localStorage.setItem('admin', null);
            this.$window.localStorage.removeItem('token');
            this.$window.localStorage.removeItem('username');
            this.$window.localStorage.removeItem('admin');
        }

    }

    //     constructor(
    //         private $http:ng.IHttpService,
    //         private $window:ng.IWindowService,
    //         private $q:ng.IQService
    //     ){
    //
    //     }
    //     isAdmin(){
    //         return this.$window.localStorage.getItem('admin');
    //     }
    //     getUsername(){
    //         return this.$window.localStorage.getItem('username');
    //     }
    //     login(loginInfo){
    //         return this.$q((resolve, reject) =>{
    //             this.$http
    //                 .post('/api/users/login', loginInfo)
    //                 .then((data:any) =>{
    //                     console.log(data);
    //
    //                     let token = data.data.token;
    //                     let admin = data.data.admin;
    //                     let username = data.data.username;
    //                     this.$window.localStorage.setItem('token', token);
    //                     this.$window.localStorage.setItem('username', username);
    //                     this.$window.localStorage.setItem('admin', admin);
    //                     resolve();
    //                 })
    //                 .catch((err) =>{
    //                     reject(err);
    //                 });
    //         });
    //     }
    //     logout(){
    //         //why do not removeItem directly
    //         this.$window.localStorage.setItem('token', null);
    //         this.$window.localStorage.setItem('username', null);
    //         this.$window.localStorage.setItem('admin', null);
    //         this.$window.localStorage.removeItem('token');
    //         this.$window.localStorage.removeItem('username');
    //         this.$window.localStorage.removeItem('admin');
    //     }
    // }
    angular.module('imdbclone').service('loginService', LoginService);
}
