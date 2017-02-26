var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function MyController($scope, $http) {

	$scope.users;
	$http.get('js/data.json').then(function(data){
		$scope.users = data;
			console.log($scope.users.data[0]);
	});



}]);

