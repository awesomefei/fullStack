namespace imdbclone.Controllers{
    export class RegisterController{
        public loginInfo;
        constructor(
            private loginService: imdbclone.Services.LoginService,
            private $state: ng.ui.IStateService,
            private $uibModalInstance:ng.ui.bootstrap.IModalServiceInstance,
            private $uibModal:ng.ui.bootstrap.IModalService
        ){

        }
        register(){
            this.loginService.registerOnService(this.loginInfo)
            .then(() =>{
                console.log('register success');
                this.$uibModalInstance.close();

            })
            .catch(() =>{
                alert('Creation failed')
            });
        }


    }
}
