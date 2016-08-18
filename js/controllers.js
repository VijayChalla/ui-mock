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


}).controller('CommentListController',function($scope,$state,popupService,$window,Comment){

    // list all Posts
    $scope.comments=Comment.query();

    // delete a post
    $scope.deletePost=function(comment){
        if(popupService.showPopup('Really delete this?')){
            comment.$delete(function(){

                $state.go('comments');
            });
        }
    }

}).controller('CommentCreateController',function($scope,$state,$stateParams,Comment){

    // add new post

    $scope.comment = new Comment();

    $scope.addComment = function(){
        $scope.comment.$save(function(){

            // go to list page
            $state.go('comments');
        });
    }

}).controller('CommentViewController',function($scope,$stateParams,Comment){

    // view specific post
    $scope.comment = Comment.get({id:$stateParams.id});
}).controller('CommentEditController',function($scope,$state,$stateParams,Comment){

    // update post

    $scope.updateComment=function(){
        $scope.comment.$update(function(){

            // go to list page
            $state.go('comments');
        });
    };

    $scope.loadComment=function(){
        $scope.comment=Comment.get({id:$stateParams.id});
    };

    $scope.loadComment();


}).controller('PhotoListController',function($scope,$state,popupService,$window,Photo){

    // list all photos
    $scope.photos = Photo.query();

    // delete a photo
    $scope.deletePhoto=function(photo){
        if(popupService.showPopup('Really delete this?')){
            movie.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('PhotoCreateController',function($scope,$state,$stateParams,Photo){

    // add new Photo

    $scope.photo = new Photo();

    $scope.addPhoto = function(){
        $scope.photo.$save(function(){

            // go to list page
            $state.go('photos');
        });
    }

}).controller('PhotoViewController',function($scope,$stateParams,Photo){

    // view specific post
    $scope.photo = Photo.get({id:$stateParams.id});
}).controller('PhotoEditController',function($scope,$state,$stateParams,Photo){

    // update photo

    $scope.updatePhoto=function(){
        $scope.photo.$update(function(){

            // go to list page
            $state.go('photos');
        });
    };

    $scope.loadPhoto=function(){
        $scope.photo = Photo.get({id:$stateParams.id});
    };

    $scope.loadPhoto();


});
