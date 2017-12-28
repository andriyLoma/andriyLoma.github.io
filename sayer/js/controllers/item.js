app.controller('itemCtrl', ['$scope','UserService', function($scope,UserService) {
     var vm=this;
     vm.current_item={}
     vm.add_comment=function(){
         vm.obj={
             text:vm.comment_text,
             date:$scope.date,
             item_id:current_item.id
         }
         UserService.add_comment(vm.obj);
         vm.comment_text='';
     }
     vm.removeComment=function(id){
         console.log(id)
         UserService.remove_comment(id);
     }
    
     vm.init=function(){
       vm.current_item=UserService.get_current_item();  
    }
    vm.init()
   
}]);