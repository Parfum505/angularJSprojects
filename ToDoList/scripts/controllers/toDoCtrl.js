angular.module("todoListApp")

.controller('toDoCtrl', ["$scope", "dataService", function($scope, dataService){

	dataService.getData(function(respons){
		//console.log(respons);
		$scope.todos = respons.data;
	});
	$scope.deleteTodo = function(todo, index) {
		dataService.deleteTodo(todo);
		$scope.todos.splice(index, 1);
	};
	$scope.saveTodo = function(todo) {
		dataService.saveTodo(todo);
		// $scope.todos.push();
	};

}]);