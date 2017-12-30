app.controller('suggesCtrl',['UserService','$location',function(UserService,$location){
        var vm=this;
//    vm.currentUser={};
    vm.sugges=[];

    vm.sendSugg=function(){

//        if(currentUser){
             vm.sugg = {
//            name: vm.currentUser.name,
            text: vm.txtSugg
        }
//            console.log(vm.sugg);
        UserService.addSugges(vm.sugg);
             vm.txtSugg='';
//        }
//        vm.txtSugg='';
    }
    
    vm.init=function(){
//       vm.currentUser=UserService.getCurUser();
         vm.sugges=UserService.getSugges();
    }
    vm.init()
}]);