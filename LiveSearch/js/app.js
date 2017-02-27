var myApp = angular.module('myApp', ['ngRoute', 'artistControllers']);

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/list', {
			templateUrl: 'pages/list.html',
			controller: 'ListController'
		})
		.when('/details/:itemId', {
			templateUrl: 'pages/details.html',
			controller: 'DetailsController'
		})
		.otherwise({
			redirectTo: '/list'
		});
}]);