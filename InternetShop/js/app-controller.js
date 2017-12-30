app.controller('homeCtrl',['$rootScope','UserService',function($rootScope,UserService){
    var vm=this;
	vm.headerProducts=[];
    $rootScope.chartProduct;
    vm.headerProducts = $rootScope.totalBudget2;
        
    vm.init=function(){
		if(UserService.getChartProducts()){
			vm.headerProducts=UserService.getChartProducts();
		}
	}
	vm.init();
}])