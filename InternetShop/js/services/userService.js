app.factory('UserService',['$http','$rootScope','$location', function($http,$rootScope,$location){

    return{
        
        getProducts:function(){
            return products;
        },
        getCurProd:function(){
            return currentProduct;
        },
        showCurProd:function(id){
            for(var i in products){
                if (products[i].id === id) {
                    currentProduct=products[i];
                }
            }
        },
        updateChart:function(){
			localStorage.setItem('test',JSON.stringify(chartProducts));	
		},
        getChartProducts:function(){
			chartProducts=JSON.parse(localStorage.getItem('test'));
            if(chartProducts==null){
                $rootScope.chartProduct=0;
            }else{
                $rootScope.chartProduct=chartProducts.length;
            }     
            return chartProducts;
        },
        addToChart:function(id){
                 if(chartProducts==null){
                chartProducts=[];
            }     
            for(var j in chartProducts){
                if(chartProducts[j].id==id){
                    chartProducts[j].count++;
                    this.calculatePrice();
                    this.updateChart();
                    return;
                }
            }
            for(var i in products){
                if(products[i].id === id){
                    chartProducts.push(products[i]);
                }
            }
           this.calculatePrice();
			this.updateChart();
                       
        },
        removeProduct:function(id){
            for(var i in chartProducts){
                if(chartProducts[i].id === id){
                    chartProducts.splice(i,1);
                }
            }
            this.calculatePrice();
			this.updateChart();
            if(chartProducts==null){
                $rootScope.chartProduct=0;
            }else{
                $rootScope.chartProduct=chartProducts.length;
            } 
            
        },
        getCategories:function(){
            return category;
        },
        getPrice:function(){
            this.calculatePrice();
            console.log(totalPrice);
            return totalPrice;
        },
        calculatePrice:function(){
            var price=0;
            for(var i in chartProducts){
                if(chartProducts[i].count<0){
                    chartProducts[i].count=0;
                }
               price+=chartProducts[i].price*chartProducts[i].count;
            }
            totalPrice.price=price;
        },
        send:function(obj){
           buyers.push(obj);
        },
		clearChart:function(){
            $rootScope.chartProduct=0;
			totalPrice.price=0;
            chartProducts=[];
            localStorage.clear();
		},
        
        addSugges:function(sugg){
           sugges.push(sugg);
       },
        getSugges: function(){
                return sugges;
        },
        addProduct:function(prod){
               products.push(prod);
        },
        addCategory:function(categ){
               category.push(categ);
        },
        removeProductOnServer:function(id){
             for(var i in products){
                 if(id == products[i].id){
                     products.splice(i,1);
                 }
             }
        },
        removeCategoryOnServer:function(id){
             for(var i in category){
                 if(id == category[i].id){
                     category.splice(i,1);
                 }
             }
        },
        changeProduct:function(changeProd){
            var itm = changeProd;
            for(var i in products){
                if(itm.id===products[i].id){
                    products.splice(i,1,itm)
                }
            }
        },
        changeCategory:function(changeCat){
            var itm = changeCat;
            for(var i  in category){
                if(itm.id===category[i].id){
                    category.splice(i,1,itm)
                }
            }
        }
    }
        
        
    
}]);
var sugges=[];
var buyers = [];
var totalPrice = {
    price: 0
};
var chartProducts = [];
var currentProduct = null;
var products = [
    {
        id:1,
        name:'PC',
        price:1000,
        about:'some text',
        idCateg:11,
        photo:'http://www.clker.com/cliparts/7/a/3/a/13063667481210127161dekstop-pc.jpg',
        count:1
    },
    {
        id:2,
        name:'PC',
        price:150,
        about:'some text',
        idCateg:11,
        photo:'http://www.setup-pro.ru/img/image/pc.png',
        count:1
    },
    {
        id:3,
        name:'notebook',
        price:1300,
        about:'some text',
        idCateg:22,
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/MacBook_Pro_transparency.png/597px-MacBook_Pro_transparency.png',
        count:1
    },
    {
        id:4,
        name:'Tablet',
        price:170,
        about:'some text',
        idCateg:33,
        photo:'http://krez.com/files/goods/photos_more/51463.png',
        count:1
    },
    {
        id:5,
        name:'notebook',
        price:2400,
        about:'some text',
        idCateg:22,
       photo:'http://static.compareindia.news18.com/compareindia/gallery/images/2014/jul/40010_1_171128203253.jpg',
        count:1
    },
    {
        id:6,
        name:'PC',
        price:1000,
        about:'some text',
        idCateg:11,
        photo:'https://img.grouponcdn.com/deal/TMXK9RT1cciyGTaUrtEgVGVTFmm/TM-1400x840/v1/c700x420.jpg',
        count:1
    },
    {
        id:7,
        name:'PC',
        price:1500,
        about:'some text',
        idCateg:11,
        photo:'https://dri2.img.digitalrivercontent.net/Storefront/Site/msusa/images/promo/PC/en-MSUSA-PC-Mod-G-FY17-Holiday-16-Theme-PC-Pages-V6-tablet.png',
        count:1
    },
    {
        id:8,
        name:'notebook',
        price:1300,
        about:'some text',
        idCateg:22,
        photo:'https://assets.gadgets360cdn.com/shop/assets/products/hp-14-ac171tu-t5q67pa-acj-14-inch-laptop_1458285978.jpeg',
        count:1
    },
    {
        id:9,
        name:'Tablet',
        price:170,
        about:'some text',
        idCateg:33,
        photo:'http://pngimg.com/uploads/tablet/tablet_PNG8600.png',
        count:1
    },
    {
        id:10,
        name:'notebook',
        price:2400,
        about:'some text',
        idCateg:22,
       photo:'http://pluspng.com/img-png/free-png-laptop-laptop-free-png-image-2046.png',
        count:1
    }
];
var category = [
    {
        id:11,
        name:'pc'
    },
    {
        id:22,
        name:'notebook'
    },
    {
        id:33,
        name:'tablet'
    }
];