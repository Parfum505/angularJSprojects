var myApp = angular.module('myApp', ['ngRoute', 'weatherControllers']);

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

myApp.directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherReport.html',
		replace: true,
		scope: {
			weatherDay: '=',
			convertDate: '&',
			dateFormat: '@'
		}
	}
});
