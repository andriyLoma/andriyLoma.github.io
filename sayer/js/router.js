app.config(function($routeProvider){
    
    $routeProvider
    .when('/home',{
        templateUrl:'templates/home_page.html',
         controller:'homeCtrl',
        controllerAs:'home'
    })
    .when('/createItem',{
        templateUrl:'templates/create_item.html',
         controller:'createItemCtrl',
        controllerAs:'createItem'
    })
    .when('/item',{
        templateUrl:'templates/item.html',
         controller:'itemCtrl',
        controllerAs:'item'
    })
    
    
    .otherwise({
        redirectTo:'/home'
    })
})