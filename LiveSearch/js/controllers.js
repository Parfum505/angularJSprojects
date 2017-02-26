var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function MyController($scope, $http) {

	$http.get('js/data.json').then(function(data){
		$scope.users = data;
	});
	$scope.userOrder = 'name';



}]);

