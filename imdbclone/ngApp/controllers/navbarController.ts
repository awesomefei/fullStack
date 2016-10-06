namespace imdbclone.Controllers{

    class NavBarController{
        public mesesage = 'welcome :';
        constructor(
            private loginService:imdbclone.Services.LoginService,
            private $state:ng.ui.IStateService
        ){

        }
        getUsername(){
            return this.loginService.getUsername()
        }
        isAdmin(){
            return this.loginService.isAdmin();
        }
        logout(){
            this.loginService.logout();
            this.$state.go('login');
        }
    }
    angular.module('imdbclone').controller('navbarController', NavBarController);
}
