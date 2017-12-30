app.controller('adminCtrl', ['$http','UserService', function($http,UserService) {
     
     var vm=this;
     vm.products=[];
    vm.category=[];
    
    vm.count=0;
    vm.count2=0;
   vm.editBlockProduct = angular.element(document.getElementById('unvissibleProduct'));
   vm.editBlockCategory = angular.element(document.getElementById('unvissibleCategory'));
    vm.changeProduct = {};
    vm.changeCategory = {};
    
      vm.editProduct = function(prod){
                    if(vm.count==0){
                vm.editBlockProduct.css('display','block');
                vm.count=1;
                    }else{
                vm.editBlockProduct.css('display','none');
                vm.count=0;
                }
           vm.changeProduct = prod;
          vm.changeProductValues = function(id){
              UserService.changeProduct(vm.changeProduct);
//              vm.changeProduct={
//                  name:'',
//                  price:'',
//                  about:'',
//                  photo:'',
//                  idCateg:''
//              }
               vm.editBlockProduct.css('display','none');
                vm.count=0;
          }
            }
     vm.editCategory = function(prod){
                    if(vm.count2==0){
                vm.editBlockCategory.css('display','block');
                vm.count2=1;
                    }else{
                vm.editBlockCategory.css('display','none');
                vm.count2=0;
                }
          vm.changeCategory = prod;
         vm.changeCategoryValues = function(id){
              UserService.changeCategory(vm.changeCategory);
               vm.editBlockCategory.css('display','none');
                vm.count2=0;
          }
            }
    
     vm.remove = function(id){
         UserService.removeProductOnServer(id);
     }
     vm.removeCat = function(id){
         UserService.removeCategoryOnServer(id);
     }
     vm.addProduct = function(){
         vm.product = {
             name:vm.nameProduct,
             price:vm.priceProduct,
             about:vm.description,
             idCategory:vm.categoryProduct,
             photo:vm.photo,
             count:1
         }
         UserService.addProduct(vm.product);
         vm.nameProduct='';
         vm.priceProduct='';
         vm.description='';
         vm.categoryProduct='';
         vm.photo='';         
     }
      vm.addCategory = function(){
         vm.categ = {
             id:vm.idCategory,
             name:vm.nameCategory
         }
         UserService.addCategory(vm.categ);
          vm.idCategory='';
          vm.nameCategory='';
     }
    
     vm.init=function(){

        vm.products=UserService.getProducts(function(data){
            vm.products = data;
        });
       
        vm.category=UserService.getCategories(function(data){
            vm.category = data;
        });
    }
    vm.init()
   
}]);