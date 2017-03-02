var weatherControllers = angular.module('weatherControllers', ['ngResource']);

weatherControllers.controller('homeController', ['$scope', 'cityService','$location', function($scope, cityService, $location) {
	$scope.city = cityService.city;
	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});
	$scope.submit = function() {
		$location.path('/forecast');
	}
}]);

weatherControllers.controller('forecastController', ['$scope','$http', 'cityService', function($scope, $http, cityService) {
	$scope.limit = '3';
	$scope.city = cityService.city;
	$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.city+'&cnt=9&units=metric&APPID=0867a13b59c398d1edd05d49f440e4f0').then(function(respons) {
		$scope.cityName = respons.data.city.name +' '+respons.data.city.country;
		$scope.lists = respons.data.list;
		cityService.city = '';
		// console.log(respons.data);
	}, function(respons) {
		$scope.cityName = respons.data.message;
		// console.log(respons);
	});
	$scope.date = function(date) {
		return new Date(date * 1000);
	}
}]);