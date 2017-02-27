var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {

	$http.get('js/data.json').then(function(data){
		$scope.users = data.data;
		// console.log(data.data);
	});
	$scope.userOrder = 'name';
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

	$http.get('js/data.json').then(function(data){
		$scope.users = data.data;
		$scope.userItem = $routeParams.itemId;
		// console.log(data.data);


	if ($routeParams.itemId > 0) {
		$scope.prevUser = ($routeParams.itemId)*1 - 1;
	} else {
		$scope.prevUser = $scope.users.length -1;
	}
	if ($routeParams.itemId < $scope.users.length -1) {
		$scope.nextUser = ($routeParams.itemId)*1 + 1;
	} else {
		$scope.nextUser = 0;
	}

	});
}]);