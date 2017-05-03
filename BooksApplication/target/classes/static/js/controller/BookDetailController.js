'use strict';

angular.module('bookApp')
.controller('BookDetailController', BookDetailController);

function BookDetailController($scope, BookService, $stateParams){
console.log(bookId)
	$scope.book = {};
	$scope.getBookDetail = getBookDetail;
	var bookId = $stateParams.bookId;
	$scope.getBookDetail(bookId);
	
	function getBookDetail(bookId){
		BookService.getBook(bookId).then(
				function (data){
					$scope.book = data;
				}		,
				function (error){
					console.log(error);
				});
	}
}