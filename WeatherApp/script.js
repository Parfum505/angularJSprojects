var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'pages/home.html',
			controller: 'homeController'
		})
		.when('/forecast', {
			templateUrl: 'pages/forecast.html',
			controller: 'forecastController'
		})
		.otherwise({
			redirectTo: '/home'
		});
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
	$scope.limit = 3;
	$scope.city = cityService.city;
	$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.city+'&cnt=7&units=metric&APPID=0867a13b59c398d1edd05d49f440e4f0').then(function(respons) {
		$scope.cityName = respons.data.city.name +' '+respons.data.city.country;
		$scope.lists = respons.data.list;
		cityService.city = '';
		// console.log(respons.data);
	}, function(respons) {
		$scope.cityName = respons.data.message;
		console.log(respons);
	});
	$scope.date = function(date) {
		return new Date(date * 1000);
	}
}]);