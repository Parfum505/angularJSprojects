'use strict';

angular.module("todoListApp")

.controller('toDoCtrl', ["$scope", "dataService", function($scope, dataService){

	dataService.getData(function(respons){
		$scope.todos = respons.data;
	});
	$scope.deleteTodo = function(todo, index) {
		dataService.deleteTodo(todo);
		$scope.todos.splice(index, 1);
	};
	$scope.saveTodo = function(todo) {
		dataService.saveTodo(todo);
	};
		$scope.addTodo = function(newTodo) {
		if(newTodo && newTodo.name) {
		dataService.addTodo(newTodo);
		$scope.todos.push({"name": newTodo.name});
		$scope.newTodo.name = "";
		}
	};

}]);