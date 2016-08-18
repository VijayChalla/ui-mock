/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('movieApp',['ui.router','ngResource','movieApp.controllers','movieApp.services']);

angular.module('movieApp').config(function($stateProvider,$httpProvider){

    $stateProvider.state('movies',{
        url:'/movies',
        templateUrl:'partials/movies.html',
        controller:'MovieListController'
    }).state('viewMovie',{
       url:'/movies/:id/view',
       templateUrl:'partials/movie-view.html',
       controller:'MovieViewController'
    }).state('newMovie',{
        url:'/movies/new',
        templateUrl:'partials/movie-add.html',
        controller:'MovieCreateController'
    }).state('editMovie',{
        url:'/movies/:id/edit',
        templateUrl:'partials/movie-edit.html',
        controller:'MovieEditController'

    }).state('posts',{
        url:'/posts',
        templateUrl:'partials/post/index.html',
        controller:'PostListController'
    }).state('newPost',{
        url:'/posts/new',
        templateUrl:'partials/post/add.html',
        controller:'PostCreateController'
    }).state('viewPost',{
       url:'/posts/:id/view',
       templateUrl:'partials/post/view.html',
       controller:'PostViewController'
    }).state('editPost',{
        url:'/posts/:id/edit',
        templateUrl:'partials/post/edit.html',
        controller:'PostEditController'

    }).state('comments',{
        url:'/comments',
        templateUrl:'partials/comments/index.html',
        controller:'CommentListController'
    }).state('newComment',{
        url:'/comments/new',
        templateUrl:'partials/comments/add.html',
        controller:'CommentCreateController'
    }).state('viewComment',{
       url:'/comments/:id/view',
       templateUrl:'partials/comments/view.html',
       controller:'CommentViewController'
    }).state('editcomment',{
        url:'/comments/:id/edit',
        templateUrl:'partials/comments/edit.html',
        controller:'CommentEditController'

    });
}).run(function($state){
   $state.go('movies');
});