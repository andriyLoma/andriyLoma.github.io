app.factory('UserService',['$location', function($location){

    return{
         updateItems:function(){
			localStorage.setItem('items',JSON.stringify(items));	
		},
       get_items:function(){
           items=JSON.parse(localStorage.getItem('items'));
         return items; 
       },
        get_current_item:function(){
         return current_item;  
       },
        add_item:function(str){ 
            if(items==null){
                items=[];
            }    
            var new_item={
                id: Date.now(),
                name: str,
                comments: []
            }
            items.push(new_item);
            this.updateItems();
            $location.path('/home');
          
        },
        add_comment:function(obj){
            var new_comment = {
                comment_id: Date.now(),
                text: obj.text,
                date_created: obj.date
            }
            for (var i in items){
                 if(items[i].id == obj.item_id){
                     items[i].comments.push(new_comment);
                 }
             }  
            this.updateItems();
        },
        remove_item:function(id){
            for (var i in items){
                if(items[i].id == id){
                    items.splice(i,1);
                        }
                 } 
            this.updateItems();
        }, 
        remove_comment:function(id){
            for(var i in current_item.comments){
                if(current_item.comments[i].comment_id == id){
                    current_item.comments.splice(i,1);
                }
            }
            this.updateItems();
        },
         change_item:function(change_item){
             for (var i in items){
                 if(items[i].id == change_item.id){
                     items.splice(i,1,change_item);
                 }
             }
             this.updateItems();
        },
        set_current_item:function(id){
            for (var i in items){
                if(items[i].id == id){
                    current_item=items[i];
                    $location.path('/item');
                    }
                } 
        }
    
    }
}]);
var current_item={};
var items=[];