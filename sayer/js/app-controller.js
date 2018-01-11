app.controller('mainCtrl',['$scope','UserService',function($scope,UserService){
   $scope.date = new Date();
   $scope.date =($scope.date.getMonth() + 1) + '-' + $scope.date.getDate() + '-' +  $scope.date.getFullYear();
}]);