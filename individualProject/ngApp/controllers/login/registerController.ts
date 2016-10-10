namespace individualProject.Controllers{
    export class RegisterController{
        public loginInfo;
        constructor(
            private loginService: individualProject.Services.LoginService,
            private $state: ng.ui.IStateService,
        ){

        }
        register(){
            this.loginService.registerOnService(this.loginInfo)
            .then(() =>{
                console.log('register success');
                this.$state.go('login');

            })
            .catch((err) =>{
                alert(err);
            });
        }


    }
}
