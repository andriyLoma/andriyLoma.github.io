app.directive('myHeader',['UserService',function(UserService){
    
    return{
        restrict:'A',
		templateUrl: 'templates/header.html',                                            
		scope: {
			count: '='	
		},
        link:function(scope,element,attrs){
        }
    }
}]);