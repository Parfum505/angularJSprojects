var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'homeController'
		})
		.when('/forecast', {
			templateUrl: 'pages/forecast.html',
			controller: 'forecastController'
		})
});

myApp.service('cityService', function() {
	this.city = '';
});

myApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
	$scope.city = cityService.city;
	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});
}]);

myApp.controller('forecastController', ['$scope','$http', 'cityService', function($scope, $http, cityService) {

	$scope.city = cityService.city;
	$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.city+'&cnt=7&APPID=0867a13b59c398d1edd05d49f440e4f0&').then(function(respons) {
		//$scope.temp = respons.list[0].temp.day;
		console.log(respons);
	});
}]);