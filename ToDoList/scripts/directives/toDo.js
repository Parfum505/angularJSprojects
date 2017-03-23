angular.module("todoListApp")

.directive('toDo', function() {
	return {
		resctrict: "E",
		templateUrl: "templates/template.html",
		controller: "toDoCtrl",
		replace: true
	}
});