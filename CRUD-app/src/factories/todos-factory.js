import angular from 'angular';
import _ from 'lodash';


const todosFactory = angular.module('app.todosFactory', [])

.factory('todosFactory', ($http) => {
	
	function getTasks($scope) {
		$http.get('/todos').success(response => {
			$scope.todos = response.todos;
		});
	}

	function addTask($scope, todoName) {
		if(!todoName) { return; }

		$http.post('/todos', {
			task: todoName,
			isCompleted: false,
			isEditing: false
		}).success(response => {
			getTasks($scope);
			$scope.todoTask = '';
			console.log(response);
		});

		/*	!!FOR STATIC DATA!!

		if(todoName !== '') {
			var todo = {
				isCompleted : false,
				task : todoName
			}
			$scope.todos.push(todo);
			$scope.todoTask = '';
		} 
		*/
	}

	function saveTask($scope, todo) {
		
		$http.put(`/todos/${todo._id}`, { 
			task: todo.updatedTask 
		}).success(response => {
			getTasks($scope);
			todo.isEditing =  false;
			console.log(response);
		});

		/* !!FOR STATIC DATA!!

		todo.isEditing = false;
		todo.task = todo.updatedTask;

		*/
	}

	function deleteTask($scope ,taskToDelete) {

		$http.delete(`todos/${taskToDelete._id}`).success(response => {
			getTasks($scope);
			console.log(response);
		});

		/* !!FOR STATIC DATA!!

		_.remove($scope.todos, todo => todo.task === taskToDelete.task);
		
		*/
	}

	function cancelTask(todo) {
		todo.isEditing = false;
	} 

	function editTask(todo) {
		todo.isEditing = true;
		todo.updatedTask = todo.task;
	}

	return {
		getTasks,
		addTask,
		saveTask,
		deleteTask,
		cancelTask,
		editTask
	};
});

export default todosFactory;