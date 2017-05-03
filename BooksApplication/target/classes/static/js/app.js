'use strict';
 angular.module('bookApp', ['ui.router', 'ui.bootstrap'])
 .config(function($stateProvider, $urlRouterProvider) {
     
     $urlRouterProvider.otherwise('/login');
     
     $stateProvider
         
         .state('login', {
             url: '/login',
             templateUrl: 'views/login.html',
             controller : 'LoginController'
         })

         .state('books', {
        	 url: '/books',
             templateUrl: 'views/books.html',
             controller : 'BookController'
         })
         
         .state('books/detail', {
        	 url: '/books?bookId',
             templateUrl: 'views/book-detail.html',
             controller : 'BookDetailController'
         })
         ;
         
 });


