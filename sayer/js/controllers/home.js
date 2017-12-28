app.controller('homeCtrl', ['$scope','UserService','$location', function($scope,UserService,$location) {
     var vm=this;
    vm.items=[];
    vm.change_item={};
    
    vm.removeItem=function(id){
        UserService.remove_item(id);
    }
    vm.changing_item=function(obj){
        vm.change_item=obj;
    }
    vm.change_item_func=function(){
        UserService.change_item(vm.change_item);
    }
    vm.choose_item=function(id){
        UserService.set_current_item(id);
    }
    
    
    
     vm.init=function(){
          vm.items=UserService.get_items();
    }
    vm.init()
   
}]);