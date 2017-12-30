app.controller('contactCtrl',['UserService',function(UserService){
        var vm=this;
      vm.chartProducts=[];
    vm.totalPrice={};
    
    vm.send=function(){
        vm.buyer={
            email:vm.email,
            name:vm.name,
            sname:vm.sname,
            phone:vm.phone,
            message:vm.message,
            chartProducts:vm.chartProducts,
            totalPrice:vm.totalPrice
        }
        UserService.send(vm.buyer);
            vm.email='';
           vm.name='';
            vm.sname='';
            vm.phone='';
            vm.message='';
    }
    
    

		// function to submit the form after all validation has occurred			
		vm.submitForm = function() {

			// check to make sure the form is completely valid
			if (vm.userForm.$valid) {
				alert('submit');
			}

		};
    
    vm.init=function(){
         vm.chartProducts=UserService.getChartProducts();
        vm.totalPrice=UserService.getPrice();
    }
    vm.init()
}]);