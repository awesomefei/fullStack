namespace individualProject.Controllers{
    export class LoginController{
        public loginInfo;
        public message ='Hello from login Controller';
        constructor(private loginService: individualProject.Services.LoginService,
                    private $state: ng.ui.IStateService
                ){

                }

        login(){
            console.log("@@@@@@@@@@@@ LoginController + " + this.loginInfo);
            this.loginService.login(this.loginInfo)
            .then(() =>{
                this.$state.go('cart');
            })
            .catch(() =>{
                alert('login failed');
            });
        }
    }
}
