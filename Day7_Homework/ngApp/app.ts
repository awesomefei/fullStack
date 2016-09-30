namespace App{
  angular.module('MyApp',['ui.router'])
    .config((
      $stateProvider: ng.ui.IStateProvider,
      $locationProvider:ng.ILocationProvider,
      $urlRouterProvider:ng.ui.IUrlRouterProvider
    )=>{
      $stateProvider
        .state('home',{
          url:'/',
          templateUrl:'/views/home.html',
          controller: App.Controllers.HomeController,
          controllerAs: 'vm'
        })
        .state('about',{
          url:'/about',
          templateUrl:'/views/about.html',
          controller:App.Controllers.AboutController,
          controllerAs:'vm'
        })
        .state('diary',{
          url:'/diary',
          templateUrl:'/views/diary.html',
          controller:App.Controllers.DiaryController,
          controllerAs:'vm'
        })
        .state('detail', {
          url:'/detail/:id',
          templateUrl:'/views/detail.html',
          controller:App.Controllers.DiaryDetailsController,
          controllerAs:'vm'
        });


        $locationProvider.html5Mode(true);
    });
}
