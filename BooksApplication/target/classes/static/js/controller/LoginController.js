/**
 * 
 */
'use strict';

angular.module('bookApp').controller('LoginController', LoginController);

LoginController.$inject = [ '$scope', '$state', 'LoginService' ];

function LoginController($scope, $state, LoginService) {

	$scope.user = {
		email : '',
		password : ''
	};

	$scope.signin = signin;

	function signin() {
		LoginService.signin($scope.user).then(function(data) {
			console.log(data);
			if(data != null && data.id != ''){
				$state.go('books');
			}
		}, function(error) {
			console.log(error);
		})
	}
}
