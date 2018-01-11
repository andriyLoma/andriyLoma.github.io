app.controller('homeCtrl',['$scope','$window','UserService','$location',function($scope,$window,UserService,$location){
    var vm=this;
    vm.items=[];
    vm.change_item={};
    vm.show_remove=function(){};
    vm.removeItem=function(id,index){
        vm.items.splice(index, 1);
        UserService.remove_item(id);
    }
    vm.choose_item=function(id){
        UserService.set_current_item(id);
    }
    vm.init=function(){
        vm.items=UserService.get_items();
    }
    vm.init()
}]);