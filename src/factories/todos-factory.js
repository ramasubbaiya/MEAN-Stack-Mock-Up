import angular from 'angular';
import _ from 'lodash';


const todosFactory = angular.module('app.todosFactory', [])

.factory('todosFactory', () => {
	
	function addTask($scope, todoName) {
		if(todoName !== '') {
			var todo = {
				isCompleted : false,
				task : todoName
			}
			$scope.todos.push(todo);
			$scope.todoTask = '';
		}
	}

	function saveTask(todo) {
		todo.isEditing = false;
		todo.task = todo.updatedTask;
	}

	function deleteTask($scope ,taskToDelete) {
		_.remove($scope.todos, todo => todo.task === taskToDelete.task);
	}

	function cancelTask(todo) {
		todo.isEditing = false;
	} 

	function editTask(todo) {
		todo.isEditing = true;
		todo.updatedTask = todo.task;
	}

	return {
		addTask,
		saveTask,
		deleteTask,
		cancelTask,
		editTask
	};
});

export default todosFactory;