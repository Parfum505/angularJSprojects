var weatherControllers = angular.module('weatherControllers', ['ngResource']);

weatherControllers.controller('homeController', ['$scope', 'cityService','$location','$http', function($scope, cityService, $location, $http) {
	$scope.city = cityService.city;
	$scope.tempF = cityService.tempF;

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});
	$scope.$watch('tempF', function() {
		cityService.tempF = $scope.tempF;
	});
	$scope.submit = function() {
		$location.path('/forecast');
	};
	$scope.date = function(date) {
		return new Date(date * 1000);
	};

	$scope.tempSwitch = function(temp) {
		if($scope.tempF) {
			temp = 1.8 * temp + 32;
		}
		return temp;
	};
	$scope.tempBtn = function() {
		$scope.tempF = !$scope.tempF;
		$scope.tempSwitch();
	};

		$http.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=Krakow&cnt=3&units=metric&APPID=0867a13b59c398d1edd05d49f440e4f0').then(function(respons) {
		//console.log(respons.data);
		$scope.cityName = respons.data.city.name +' '+respons.data.city.country;
		$scope.lists = respons.data.list;
		//console.log(respons.data);
	}, function(respons) {
		$scope.cityName = respons.data.message;
		// console.log(respons);
			});
}]);

weatherControllers.controller('forecastController', ['$scope','$http', 'cityService', function($scope, $http, cityService) {
	$scope.limit = '3';
	$scope.city = cityService.city;
	$scope.tempF = cityService.tempF;
	$scope.$watch('tempF', function() {
		cityService.tempF = $scope.tempF;
	});
	$scope.tempSwitch = function(temp) {
		if($scope.tempF) {
			temp = 1.8 * temp + 32;
		}
		return temp;
	};
	$scope.tempBtn = function() {
		$scope.tempF = !$scope.tempF;
		$scope.tempSwitch();
	};
	$http.get('https://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.city+'&cnt=9&units=metric&APPID=0867a13b59c398d1edd05d49f440e4f0').then(function(respons) {
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