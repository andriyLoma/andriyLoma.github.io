app.controller('createItemCtrl', ['UserService', function(UserService) {
     var vm=this;
     
    vm.create_new_item=function(){
        if(vm.newItem == '' || vm.newItem == undefined){
            return
        }
        UserService.add_item(vm.newItem);
        vm.newItem = '';
    }
    
     vm.init=function(){
          
    }
    vm.init()
   
}]);