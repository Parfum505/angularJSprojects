angular.module("todoListApp")

.controller('toDoCtrl', ["$scope", function($scope){
	$scope.todos = [
  {"name": "clean the house"},
  {"name": "water the cat"},
  {"name": "feed the lawn"},
  {"name": "pay dem bills"},
  {"name": "run"},
  {"name": "swim"}
];
}]);