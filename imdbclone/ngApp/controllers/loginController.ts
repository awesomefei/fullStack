namespace imdbclone.Controllers{
    export class LoginController{
        public loginInfo;
        constructor(
            private loginService: imdbclone.Services.LoginService,
            private $state: ng.ui.IStateService){

        }
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
