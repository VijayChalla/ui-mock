/**
 * Created by Sandeep on 01/06/14.
 */

var app = angular.module('movieApp.services',[]);

app.factory('Movie',function($resource){
    return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',{id:'@_id'},{


        update: {
            method: 'PUT'
        }
    });

    // popup service registered
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});

app.factory('Post',function($resource){
    return $resource('http://jsonplaceholder.typicode.com/posts/:id',{id:'@id'},{

        update: {
            method: 'PUT'
        }
    });

    // popup service registered
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
