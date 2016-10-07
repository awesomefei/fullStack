namespace imdbclone.Controllers{
    export class LoginController{
        public loginInfo;
        constructor(
            private loginService: imdbclone.Services.LoginService,
            private $state: ng.ui.IStateService,
            private $uibModal:ng.ui.bootstrap.IModalService,){

        }
        tryTologin(){
            this.$uibModal.open({
                templateUrl:'/ngApp/views/loginDetail.html',
                controller:imdbclone.Controllers.RegisterController,
                controllerAs:'vm',
                size:'sm'
            })
        };
        tryToRegister(){
            this.$uibModal.open({
                templateUrl:'/ngApp/views/register.html',
                controller:imdbclone.Controllers.RegisterController,
                controllerAs:'vm',

                size:'sm'
            })
        };


        login(){
            this.loginService.login(this.loginInfo)
            .then(() =>{
                this.$state.go('watchlist');
            })
            .catch(() =>{
                alert('login failed')
            });
        }



    }
}
