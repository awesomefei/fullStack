namespace MyApp{
  angular.module('MyApp',['ui.router'])
    .config((
      $stateProvider: ng.ui.IStateProvider,
      $locationProvider:ng.ILocationProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider
      ) =>{

      $stateProvider
            .state('home', {
              url:'/',
              templateUrl:'/views/home.html',
              controller: MyApp.Controllers.HomeController,
              controllerAs:'vm'

            })

            .state('about',{
              url:'/about',
              templateUrl:'/views/about.html',
              controller:'aboutController',
              controllerAs:'vm'
            })

            .state('product', {
              url:'/product',
              templateUrl:'/views/product.html',
              controller: MyApp.Controllers.ProductController,
              controllerAs:'vm'
            })
            .state('productDetails',{
              url:'/product/:id',
              templateUrl:'/views/productDetails.html',
              controller:MyApp.Controllers.ProductDetailsController,
              controllerAs:'vm'
            });
//enable html5 made that gives us an option to set the base url
        $locationProvider.html5Mode(true);

  });

}
