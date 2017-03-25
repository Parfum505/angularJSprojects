'use strict';

angular.module("todoListApp")

.service('dataService', ['$http', function($http){

	this.getData = function(callback) {
		$http.get('scripts/mock/todos.json')
		.then(callback);
	};
	this.deleteTodo = function(todo) {
		console.log(todo.name);
	};
	this.saveTodo = function(todo) {
		console.log(todo.name);
	};
		this.addTodo = function(todo) {
		console.log(todo.name);
	};

}]);