/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('movieApp.controllers',[])
.controller('MovieListController',function($scope,$state,popupService,$window,Movie){

    // list all movies
    $scope.movies=Movie.query();

    // delete a movie
    $scope.deleteMovie=function(movie){
        if(popupService.showPopup('Really delete this?')){
            movie.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('MovieViewController',function($scope,$stateParams,Movie){

    // view specific movie
    $scope.movie=Movie.get({id:$stateParams.id});

}).controller('MovieCreateController',function($scope,$state,$stateParams,Movie){

    // add new movie

    $scope.movie=new Movie();

    $scope.addMovie=function(){
        $scope.movie.$save(function(){

            // go to list page
            $state.go('movies');
        });
    }

}).controller('MovieEditController',function($scope,$state,$stateParams,Movie){

    // update movie

    $scope.updateMovie=function(){
        $scope.movie.$update(function(){

            // go to list page
            $state.go('movies');
        });
    };

    $scope.loadMovie=function(){
        $scope.movie=Movie.get({id:$stateParams.id});
    };

    $scope.loadMovie();


}).controller('PostListController',function($scope,$state,popupService,$window,Post){

    // list all Posts
    $scope.posts=Post.query();

    // delete a post
    $scope.deletePost=function(post){
        if(popupService.showPopup('Really delete this?')){
            post.$delete(function(){
                
                $state.go('posts');
            });
        }
    }

}).controller('PostCreateController',function($scope,$state,$stateParams,Post){

    // add new post

    $scope.post = new Post();

    $scope.addPost = function(){
        $scope.post.$save(function(){

            // go to list page
            $state.go('posts');
        });
    }

}).controller('PostViewController',function($scope,$stateParams,Post){

    // view specific post
    $scope.post = Post.get({id:$stateParams.id});
}).controller('PostEditController',function($scope,$state,$stateParams,Post){

    // update post

    $scope.updatePost=function(){
        $scope.post.$update(function(){

            // go to list page
            $state.go('posts');
        });
    };

    $scope.loadPost=function(){
        $scope.post=Post.get({id:$stateParams.id});
    };

    $scope.loadPost();


});
