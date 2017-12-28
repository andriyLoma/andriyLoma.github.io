app.controller('mainCtrl',['$scope','UserService',function($scope,UserService){
    var vm=this;
   $scope.date = new Date();
 $scope.date =($scope.date.getMonth() + 1) + '-' + $scope.date.getDate() + '-' +  $scope.date.getFullYear();
        
    vm.init=function(){
       
	}
	vm.init();
}])