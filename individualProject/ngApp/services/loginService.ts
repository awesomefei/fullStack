namespace individualProject.Services{
    export class LoginService{
        private loginResource;
        constructor(
            private $http:ng.IHttpService,
            private $window:ng.IWindowService,
            private $q: ng.IQService,
            private $resource:ng.resource.IResourceService,

        ){
            this.loginResource= $resource('/api/users/register')
        }
        registerOnService(user){
                    console.log(user);
                    return this.loginResource.save(user).$promise;
                }

        isAdmin(){
            //console.log('@@@@@@@@@@@@@@@@@@ isAdmin' )
            //console.log(this.$window.localStorage.getItem('admin'));
            return this.$window.localStorage.getItem('admin');
        }

        getUsername(){
            return this.$window.localStorage.getItem('username');
        }

        login(loginInfo){
            return this.$q((resolve, reject) =>{
                console.log(loginInfo);
                this.$http
                    .post('/api/users/login', loginInfo)
                    .then((data:any) =>{
                        console.log("!!!!!!!!!!!!!loginService" +data.data.username);
                        //extract token
                        let token = data.data.token;
                        let admin = data.data.admin;
                        let username = data.data.username;
                        this.$window.localStorage.setItem('token', token);
                        this.$window.localStorage.setItem('username', username);
                        this.$window.localStorage.setItem('admin', admin);
                        //resolve()??????????????????
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

    angular.module('individualProject').service('loginService',LoginService );
}
