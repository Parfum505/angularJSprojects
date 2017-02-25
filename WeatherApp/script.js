var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/second', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
});

myApp.controller('mainController', ['$scope', '$timeout','$filter', '$routeParams', function ($scope, $timeout, $filter, $routeParams) {
	$scope.name = "Hello!";

	$timeout(function () {
		$scope.name = "Goodbye!";
	}, 2000);
	$scope.text = '';
	$scope.lowerText = function () {
		return $filter('lowercase')($scope.text);
	}
	$scope.limit = 5;
	$scope.rules = ['be nice', 'be cool', 'be brave'];
	$scope.alertClick = function () {
		alert('I click ' + this.rule);
		console.log(this.$parent);
	}
}]);
myApp.controller('firstController', ['$scope', '$routeParams', function ($scope, $routeParams) {
	// $scope.name = "Hello!";


}]);
myApp.controller('secondController', ['$scope', '$routeParams', function ($scope, $routeParams) {
	// $scope.name = "Hello!";


}]);