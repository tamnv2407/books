'use strict';

angular.module('bookApp')
.controller('BookController', BookController);

BookController.$inject = ['$scope', '$uibModal' ,'BookService'];

function BookController($scope, $uibModal, BookService) {
    $scope.submit = submit;
    $scope.edit = edit;
    $scope.remove = remove;
    $scope.reset = reset;
    $scope.showAddBookForm = showAddBookForm;
    $scope.fetchAllBooks = fetchAllBooks;
    $scope.showEditBookForm = showEditBookForm;
    $scope.showDeleteConfirm = showDeleteConfirm;

    $scope.fetchAllBooks();

    function fetchAllBooks(){
        BookService.fetchAllBooks()
            .then(
            function(books) {
                $scope.books = books;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }
    
    function showAddBookForm(){
    	 $uibModal.open({
    	      animation: true,
    	      ariaLabelledBy: 'modal-title',
    	      ariaDescribedBy: 'modal-body',
    	      templateUrl: 'views/add-book.html',
    	      controller: 'AddBookController'
    	    }).result.then(function (result) {
    	       if(result == true){
    	    	    $scope.fetchAllBooks();
    	       }
    	    }, function () {
    	      $log.info('Modal dismissed at: ' + new Date());
    	    });;
    }
    
    function showEditBookForm(bookId){
    	$uibModal.open({
  	      animation: true,
  	      ariaLabelledBy: 'modal-title',
  	      ariaDescribedBy: 'modal-body',
  	      templateUrl: 'views/edit-book.html',
  	      controller: 'UpdateBookController',
  	      resolve: {
  	        bookId: function () {
  	          return bookId;
  	        }
  	      }
  	    }).result.then(function (result) {
  	       if(result == true){
  	    	    $scope.fetchAllBooks();
  	       }
  	    }, function () {
  	      
  	    });
    }
    
    function showDeleteConfirm(book){
    	$uibModal.open({
    	      animation: true,
    	      ariaLabelledBy: 'modal-title',
    	      ariaDescribedBy: 'modal-body',
    	      templateUrl: 'views/delete-book.html',
    	      controller: 'DeleteBookController',
    	      resolve: {
    	        book: function () {
    	          return book;
    	        }
    	      }
    	    }).result.then(function(result) {
    	       if(result == true){
    	    	    $scope.fetchAllBooks();
    	       }
    	    }, function () {
    	      
    	    });
    }

    function createUser(user){
        UserService.createUser(user)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while creating User');
            }
        );
    }

    function updateUser(user, id){
        UserService.updateUser(user, id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while updating User');
            }
        );
    }

    function deleteUser(id){
        UserService.deleteUser(id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while deleting User');
            }
        );
    }

    function submit() {
        if($scope.user.id===null){
            console.log('Saving New User', $scope.user);
            createUser($scope.user);
        }else{
            updateUser($scope.user, $scope.user.id);
            console.log('User updated with id ', $scope.user.id);
        }
        reset();
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < $scope.users.length; i++){
            if($scope.users[i].id === id) {
                $scope.user = angular.copy($scope.users[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if($scope.user.id === id) {//clean form if the user to be deleted is shown there.
            reset();
        }
        deleteUser(id);
    }


    function reset(){
        $scope.user={id:null,username:'',address:'',email:''};
        $scope.myForm.$setPristine(); //reset Form
    }
}
