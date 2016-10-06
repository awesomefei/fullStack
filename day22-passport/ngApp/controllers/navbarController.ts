namespace day22_passport.Controllers{
    class NavbarController{
        constructor(private loginService:day22_passport.Services.LoginService,
                    private $state:ng.ui.IStateService
        ){

        }

        getUsername(){
            return this.loginService.getUsername();
        }
        isAdmin(){
            return this.loginService.isAdmin();
        }

        logout(){
            this.loginService.logout();
            this.$state.go('login');
        }




    }

    angular.module('day22_passport').controller('navbarController', NavbarController);

}
